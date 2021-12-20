import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LazyComponentDemoComponent} from "./lazy-component-demo.component";


const routes: Routes = [
  {
    path: '',
    component: LazyComponentDemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyComponentRoutingModule {
}
