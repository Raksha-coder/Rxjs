import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PromisesComponent } from './Components/promises/promises.component';
import { ObservableComponent } from './Components/promises/observable/observable.component';
import { FromEventComponent } from './Components/promises/observable/from-event/from-event.component';
import { IntervalAndTimerComponent } from './Components/promises/observable/interval-and-timer/interval-and-timer.component';
import { OfAndFromComponent } from './Components/promises/observable/of-and-from/of-and-from.component';
import { ToArrayComponent } from './Components/promises/observable/to-array/to-array.component';
import { CustomObservableComponent } from './Components/promises/observable/custom-observable/custom-observable.component';

@NgModule({
  declarations: [
    AppComponent,
    PromisesComponent,
    ObservableComponent,
    FromEventComponent,
    IntervalAndTimerComponent,
    OfAndFromComponent,
    ToArrayComponent,
    CustomObservableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
