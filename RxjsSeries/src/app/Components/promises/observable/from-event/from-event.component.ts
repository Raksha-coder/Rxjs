import { Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { AppServiceService } from 'src/app/Services/app-service.service';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.css']
})
export class FromEventComponent {

  @ViewChild('btn') Button:ElementRef | undefined;


  constructor(private service :AppServiceService){}

  //when we work with viewChild use ngAfterViewChild lifecycle
  //or else it will give error
  ngAfterViewInit()
  {
    let count = 1;
    fromEvent(this.Button?.nativeElement,'click').subscribe(res =>{
      let countVal = "video "+ count++;
      this.service.addElement(countVal,'elElement');
      this.service.addElement(countVal,'elElement2');
    })
  }






}
