import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromisesComponent } from './Components/promises/promises.component';
import { ObservableComponent } from './Components/promises/observable/observable.component';
import { FromEventComponent } from './Components/promises/observable/from-event/from-event.component';
import { IntervalAndTimerComponent } from './Components/promises/observable/interval-and-timer/interval-and-timer.component';
import { OfAndFromComponent } from './Components/promises/observable/of-and-from/of-and-from.component';
import { ToArrayComponent } from './Components/promises/observable/to-array/to-array.component';
import { CustomObservableComponent } from './Components/promises/observable/custom-observable/custom-observable.component';

const routes: Routes = [

  {path:'promise',component:PromisesComponent},
  {path:'observable',component:ObservableComponent},
  {path:'fromEvent',component:FromEventComponent},
  {path:'intervalandTimer',component:IntervalAndTimerComponent},
  {path:'ofandfrom',component:OfAndFromComponent},
  {path:'toArray',component:ToArrayComponent},
  {path:'customobservable',component:CustomObservableComponent},


  {path:'**',redirectTo:'promise'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
