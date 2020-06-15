import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from '../services/navigation.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  page:string;
  constructor(private router:Router,
              private navigationService:NavigationService) { }

  ngOnInit() { 
    this.navigationService.subject.subscribe((data)=>{
      this.page=data;
    })
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.page=this.router.url.split('/home/')[1];
  }
}
