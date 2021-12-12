import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CounterComponent} from "./counter/counter.component";
import {TimerComponent} from "./timer/timer.component";
import {InteractionParentComponent} from "./interaction-demo/interaction-parent/interaction-parent.component";
import {CountdownParentComponent} from "./local-var-interaction-demo/countdown-parent/countdown-parent.component";

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: "counter", component: CounterComponent },
  { path: "timer", component: TimerComponent },
  { path: "interaction-parent-child", component: InteractionParentComponent },
  { path: "local-var-interaction", component: CountdownParentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
