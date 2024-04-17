import { Component } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styleUrls: ['./promises.component.css']
})
export class PromisesComponent {

  dellAvailable()
  {   return false;
  }


  hpAvailable()
  {
    return true;
  }


  dell = {
      Brand:'Dell',
      hardDisk:'2 TB',
      color :'Black'
  };

  hp = {
       Brand:'Hp',
      hardDisk:'2 TB',
      color :'Grey'
  }

  notAvailable = {
      Brand:'not available',
      status:'Failed' 
  }


  ngOnInit(){
    let buyLaptop = new Promise((resolve,reject)=>{
     // resolve("promise is resolved");
     // reject("promise is unresolved");

     if(this.dellAvailable()){
        setTimeout(() => {
          resolve(this.dell);
      }, 3000);


     }else if(this.hpAvailable())
     {
        setTimeout(() => {
        resolve(this.hp);
      }, 3000);
  
     }else{
      setTimeout(() => {
        reject(this.notAvailable);
      }, 3000);
  
     }
    });


    //if success then function will called
    //if failed block function will called
    buyLaptop.then((res)=>{
      console.log("then code => ",res);
    }).catch((res)=>{
      console.log("catch block => ",res);
      
    });
  }



  
}
