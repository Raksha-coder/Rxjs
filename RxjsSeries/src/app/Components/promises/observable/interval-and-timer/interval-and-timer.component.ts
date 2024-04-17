import { Component } from '@angular/core';
import { Subscription, interval, timer } from 'rxjs';

@Component({
  selector: 'app-interval-and-timer',
  templateUrl: './interval-and-timer.component.html',
  styleUrls: ['./interval-and-timer.component.css']
})
export class IntervalAndTimerComponent {

  obsMsg:any;
  videoSub !:Subscription;
  ngOnInit(){
    //const videoBroadcast = interval(2000);
    //timer(delay,interval);
    const videoBroadcast = timer(5000,1000);
    //timer is similar as Interval and it takes two parameter 
    //first is delay time means kitne time ke baad timer start karna h 
    //then har 1 second ke baad hum text display kar sakte h.

    //use this interval now 
    this.videoSub = videoBroadcast.subscribe((res)=>{
      this.obsMsg = "hello " + res;

      if(res > 6){
        this.videoSub.unsubscribe();
      }
    });
  }



  

}


