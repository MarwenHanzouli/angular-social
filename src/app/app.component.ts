import { Component, OnInit, HostListener, ViewChild, ChangeDetectorRef, OnDestroy, ElementRef } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { MatSidenav } from '@angular/material/sidenav';
import { MediaMatcher } from '@angular/cdk/layout';
import { LanguesService, Langue } from './services/langues.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy{

  mobileQuery: MediaQueryList;
  @ViewChild('snav',{static:false}) snav:MatSidenav;
  title = 'angular-social';
  isResponsive:boolean;
  page:string;
  public languages:Langue[];

  private _mobileQueryListener: ()=>void;
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,
            private router:Router,private el:ElementRef,
            changeDetectorRef: ChangeDetectorRef,media: MediaMatcher,
            private languesService:LanguesService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    iconRegistry.addSvgIcon(
        'register',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/register.svg'));
  }
  ngOnInit(): void {
    
    this.router.events.pipe(filter(e=> e instanceof NavigationEnd)).subscribe((data)=>{
      this.page=data['urlAfterRedirects'].split('/home/')[1];
    });
    this.languesService.subject.subscribe((data)=>{
      this.languages=data;
    });
    if(window.innerWidth<=820)
    {
      this.isResponsive=true;
    }
    else{
      this.isResponsive=false;
    }
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if(window.innerWidth<=820){
      this.isResponsive=true;
    }
    else{
      this.isResponsive=false;
      if(this.snav.opened)
      {
        this.snav.close();
      }
    }
  }
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  changeLangue(langue){
    
    this.languages=this.languages.map((l)=>{
      if(l.langue===langue){
        l.selected=true;
        return l;
      }
      l.selected=false;
      return l;
    });
    this.languesService.changeLanguage(this.languages);
  }
}
