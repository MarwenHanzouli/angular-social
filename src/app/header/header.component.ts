import { Component, OnInit, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  page:string;
  constructor(private router:Router) { }

  ngOnInit() { 
    this.router.events.pipe(filter(e=> e instanceof NavigationEnd)).subscribe((data)=>{
      this.page=data['urlAfterRedirects'].split('/home/')[1];
    });
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.page=this.router.url.split('/home/')[1];
  }
}
