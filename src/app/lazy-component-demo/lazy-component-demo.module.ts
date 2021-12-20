import { NgModule } from '@angular/core';

import {CommonModule} from "@angular/common";
import {LazyComponentDemoComponent} from "./lazy-component-demo.component";
import {LazyComponentRoutingModule} from "./lazy-component-demo-routing.module";
import {CardModule} from "../card/card.module";

@NgModule({
  declarations: [
    LazyComponentDemoComponent,
  ],
  imports: [
    CardModule,
    CommonModule,
    LazyComponentRoutingModule,
  ],
})
export class LazyComponentDemoModule { }
