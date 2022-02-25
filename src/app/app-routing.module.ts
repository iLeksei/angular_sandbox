import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CounterComponent} from "./counter/counter.component";
import {TimerComponent} from "./timer/timer.component";
import {InteractionParentComponent} from "./interaction-demo/interaction-parent/interaction-parent.component";
import {CountdownParentComponent} from "./local-var-interaction-demo/countdown-parent/countdown-parent.component";
import {MissionControlComponent} from "./interaction-via-service/mission-control/mission-control.component";
import {TemplateDemoComponent} from "./interaction-via-template/template-demo/template-demo.component";
import {DynamicContentDemoComponent} from "./dynamic-content-demo-components/dinamic-content-demo/dynamic-content-demo.component";
import {CustomComponentDemoComponent} from "./custom-component-demo/custom-component-demo.component";
import {DirectiveContainerDemoComponent} from "./directive-container-demo/directive-container-demo.component";
import {ReactiveFormDemoComponent} from "./reactive-form-demo/reactive-form-demo.component";
import {TemplateDrivenFormDemoComponent} from "./template-driven-form-demo/template-driven-form-demo.component";
import {DynamicFormDemoComponent} from "./dynamic-form-demo/dynamic-form-demo.component";
import {HttpClientDemoComponent} from "./http-client-demo/http-client-demo.component";
import {SvgDemoComponent} from "./svg-demo/svg-demo.component";

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: "counter", component: CounterComponent },
  { path: "timer", component: TimerComponent },
  { path: "interaction-parent-child", component: InteractionParentComponent },
  { path: "local-var-interaction", component: CountdownParentComponent },
  { path: "interaction-via-service", component: MissionControlComponent },
  { path: "interaction-via-template", component: TemplateDemoComponent },
  { path: "dynamic-content-demo", component: DynamicContentDemoComponent },
  { path: "custom-component-demo", component: CustomComponentDemoComponent },
  { path: "directive-container-demo", component: DirectiveContainerDemoComponent },
  { path: "reactive-form-demo", component: ReactiveFormDemoComponent },
  { path: "template-driven-form-demo", component: TemplateDrivenFormDemoComponent },
  { path: "dynamic-form-demo", component: DynamicFormDemoComponent },
  { path: "http-client-demo", component: HttpClientDemoComponent },
  { path: "svg-demo", component: SvgDemoComponent },
  { path: "lazy-component-demo", loadChildren: () =>
      import("./lazy-component-demo/lazy-component-demo.module").then( m => m.LazyComponentDemoModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
