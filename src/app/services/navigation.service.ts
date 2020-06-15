import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  public subject:BehaviorSubject<string>=new BehaviorSubject(window.location.pathname.split('/home/')[1])
  constructor(private router:Router) {
    this.router.events.pipe(filter(e=> e instanceof NavigationEnd)).subscribe((data)=>{
      this.subject.next(data['urlAfterRedirects'].split('/home/')[1])
    }); 
  }
}
