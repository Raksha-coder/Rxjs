import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor() { }
  addElement(val:any,tag:any){
    let el =  document.createElement('li');
    el.innerText = val;
    document.getElementById(tag)?.appendChild(el);
  
  }
}
