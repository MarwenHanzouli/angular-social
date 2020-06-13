import { Component, OnInit } from '@angular/core';
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
      this.page=data['url'].split('/home/')[1];
    });
  }

}
