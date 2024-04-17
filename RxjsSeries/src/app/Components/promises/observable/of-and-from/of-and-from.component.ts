import { Component } from '@angular/core';
import { from, of } from 'rxjs';
import { AppServiceService } from 'src/app/Services/app-service.service';

@Component({
  selector: 'app-of-and-from',
  templateUrl: './of-and-from.component.html',
  styleUrls: ['./of-and-from.component.css']
})
export class OfAndFromComponent {

  constructor(private _service:AppServiceService){}


  values:any = of("Anup","Shekhar","Sharma");
  obsMsg:any = of({a:"Ankit",b:"bishwas",c:"chandani"});
  storeValue:any;


  arrayValue:any = from([10,20,30]);
  //valuesOfArray:number | undefined;



  promsiseResponse:any;


  ngOnInit(){

    //of
    this.values.subscribe((res: any) =>{
      console.log(res);
      this._service.addElement(res,"unordered");
    });

    this.obsMsg.subscribe((res:any)=>{
      this.storeValue = res;
    });



    //from
    this.arrayValue.subscribe((res:any)=>{
      console.log(res);
      //this.valuesOfArray = res;
      this._service.addElement(res,"fromContainer");
    })



    //promise
    const promise =  new Promise((resolve) =>{
        setTimeout(()=>{
          resolve("Promise resolved")
        },3000);
    });


    const object4 = from(promise);
    object4.subscribe(res =>{
      console.log(res);
      this.promsiseResponse = res;
      
    });



    //from String
    const Object5 = from("Welcome to our website");
    Object5.subscribe(res =>{
      console.log(res);
      this._service.addElement(res,"container5");
      
    })


  }
}
