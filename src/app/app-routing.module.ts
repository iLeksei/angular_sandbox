import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CounterComponent} from "./counter/counter.component";
import {TimerComponent} from "./timer/timer.component";
import {InteractionParentComponent} from "./interaction-demo/interaction-parent/interaction-parent.component";

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: "counter", component: CounterComponent },
  { path: "timer", component: TimerComponent },
  { path: "interaction-parent-child", component: InteractionParentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
