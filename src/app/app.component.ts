import { Component, OnInit, HostListener, ViewChild, AfterViewInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { MatSidenav } from '@angular/material/sidenav';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit{
  ngAfterViewInit(): void {
    
  }
  
  @ViewChild('snav',{static:false}) snav:MatSidenav;
  title = 'angular-social';
  isResponsive:boolean;
  page:string;
  

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,
    private router:Router) {
    iconRegistry.addSvgIcon(
        'facebook',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/logo-facebook.svg'));
    iconRegistry.addSvgIcon(
        'register',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/register.svg'));
  }
  ngOnInit(): void {
    
    this.router.events.pipe(filter(e=> e instanceof NavigationEnd)).subscribe((data)=>{
      this.page=data['urlAfterRedirects'].split('/home/')[1];
    });
    if(window.innerWidth<=740)
    {
      this.isResponsive=true;
    }
    else{
      this.isResponsive=false;
    }
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if(window.innerWidth<=740){
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
}
