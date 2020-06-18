import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from '../services/navigation.service';
import { LanguesService, Langue } from '../services/langues.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  page:string;
  public languages:Langue[];
  selectedLanguage:string="FR";
  constructor(private router:Router,
              private navigationService:NavigationService,
              private languesService:LanguesService) { }

  ngOnInit() { 
    this.navigationService.subject.subscribe((data)=>{
      this.page=data;
    });
    this.languesService.subject.subscribe((data)=>{
      this.languages=data;
    });
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.page=this.router.url.split('/home/')[1];
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
