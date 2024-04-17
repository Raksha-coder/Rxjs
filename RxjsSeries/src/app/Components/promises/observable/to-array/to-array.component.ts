import { Component } from '@angular/core';
import { Subscription, from, interval, of, take, toArray } from 'rxjs';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.css']
})
export class ToArrayComponent {

  //ex-02
  //make an array
  users = [
    {name:"raksha",skills:"programmer"},
    {name:"minal",skills:"cooking"},
    {name:"ahana",skills:"dancing"},
    {name:"shreya",skills:"programmer"},


  ]




  ngOnInit(){
    const source = interval(1000);

    //data milne se pehle use array mai convert kar do
    //pipe is very important here.
    source.pipe
    (
      take(5),   //kitni values or data chahiye, yaha unsubscribe nahi use kar sakte h. 
      toArray()  // in the form of array
    )
    .subscribe(res =>{
      console.log(res);
      
    });




    //EX-02
    //CONVERT ARRAY INTO OBSERVABLE STREAM
    const convertinto = from(this.users);
    convertinto.subscribe(res =>{
      console.log(res);
      
    });

    //again convert this observable stream into toArray
    convertinto.pipe
    (
      toArray()
    ).subscribe(res =>{
      console.log(res);
      
    });



    //EX-03
    const source3 = of("hello","there","i","am","Raksha");

    source3
    .pipe(
      toArray()
    )
    .subscribe(res =>{
      console.log(res);
      
    })


  }
}


//why do we use pipe?
/*
    transform the value of the original observable and 
    return a new observable with the modified values
    and if we want to chain together multiple function.

*/