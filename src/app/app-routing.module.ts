import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CounterComponent} from "./counter/counter.component";
import {TimerComponent} from "./timer/timer.component";

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: "counter", component: CounterComponent },
  { path: "timer", component: TimerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
