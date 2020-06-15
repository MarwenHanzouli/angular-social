import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguesService {

  public subject:BehaviorSubject<Langue[]>=new BehaviorSubject(
    [{langue:'Français',selected:true},{langue:'English',selected:false},{langue:'العربية',selected:false}]
  );
  constructor() { }
}
export interface Langue{
  langue:string;
  selected:boolean;
}