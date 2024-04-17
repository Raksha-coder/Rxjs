import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { AppServiceService } from 'src/app/Services/app-service.service';

@Component({
  selector: 'app-custom-observable',
  templateUrl: './custom-observable.component.html',
  styleUrls: ['./custom-observable.component.css']
})
export class CustomObservableComponent {


  constructor(private _Service:AppServiceService){}
  techStatus:any;
  subObject2: Subscription | undefined;
  ngOnInit(){
    //EX-01 = Manual
    const custObj1 = Observable.create((res:any) =>{

      setTimeout(() => {
        res.next("Angular");
      }, 2000);

      setTimeout(() => {
        res.next("Typescript");
      }, 4000);

      setTimeout(() => {
        res.next("Html and Css");
        //res.error(new Error("Limit Exceeded"));
      
        
      }, 6000);

      setTimeout(() => {
        res.next("Javascript");
      }, 8000);

      setTimeout(() => {
        res.next("Jquery");
        res.complete();
     
      }, 10000);

    });

    custObj1.subscribe((res:any) =>{
      console.log(res);
      this._Service.addElement(res,"elContainer"); 
    },
      (error:any) =>{
          this.techStatus = "error";
      },
    (complete:any)=>{
      this.techStatus = "completed";
    } 
  );


  //EX-02  Custom Interval
  const custObj2 = Observable.create((res:any) =>{
      setInterval(() => {
        res.next("data emitted from example two");
      }, 1000);
  })

   this.subObject2 =  custObj2.subscribe((res:any)=>{
      console.log(res);
      
  })

  }



  //we use this method so that our function will not run in another component 
  //continuously.
  ngOnDestroy(){
    this.subObject2?.unsubscribe();
  }


}
