import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import { MenuComponent } from './menu/menu.component';
import {MatMenuModule} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";
import {MatDividerModule} from "@angular/material/divider";
import {MatGridListModule} from "@angular/material/grid-list";
import { FooterComponent } from './footer/footer.component';
import { TimerComponent } from './timer/timer.component';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { InteractionParentComponent } from './interaction-demo/interaction-parent/interaction-parent.component';
import { InteractionChildComponent } from './interaction-demo/interaction-child/interaction-child.component';
import { CountdownTimerComponent } from './local-var-interaction-demo/countdown-timer/countdown-timer.component';
import { CountdownParentComponent } from './local-var-interaction-demo/countdown-parent/countdown-parent.component';
import { MissionControlComponent } from './interaction-via-service/mission-control/mission-control.component';
import { AstronautComponent } from './interaction-via-service/astronaut/astronaut.component';
import { TemplateParentComponent } from './interaction-via-template/template-parent/template-parent.component';
import { TemplateChildComponent } from './interaction-via-template/template-child/template-child.component';
import { ZippyContentDirective } from './directives/zippy-content.directive';
import {CommonModule} from "@angular/common";
import { TemplateDemoComponent } from './interaction-via-template/template-demo/template-demo.component';
import { AdDirective } from './directives/ad.directive';
import { AdBannerComponent } from './dynamic-content-demo-components/ad-banner/ad-banner.component';
import { AdComponent } from './dynamic-content-demo-components/ad/ad.component';
import {DynamicContentDemoComponent} from "./dynamic-content-demo-components/dinamic-content-demo/dynamic-content-demo.component";
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {HttpClientModule} from "@angular/common/http";
import {InMemoryDataService} from "./services/in-memory-data.service";
import { PopupComponent } from './custom-component-demo/popup/popup.component';
import { CustomComponentDemoComponent } from './custom-component-demo/custom-component-demo.component';
import { DirectiveContainerDemoComponent } from './directive-container-demo/directive-container-demo.component';
import {MatSelectModule} from "@angular/material/select";
import { EventInterceptorDirectiveDirective } from './directive-container-demo/event-interceptor-directive.directive';
import { HiddenDirective } from './directive-container-demo/hidden.directive';
import {LazyComponentDemoModule} from "./lazy-component-demo/lazy-component-demo.module";
import {CardModule} from "./card/card.module";
import { ReactiveFormDemoComponent } from './reactive-form-demo/reactive-form-demo.component';
import { TemplateDrivenFormDemoComponent } from './template-driven-form-demo/template-driven-form-demo.component';
import { DynamicFormDemoComponent } from './dynamic-form-demo/dynamic-form-demo.component';
import { DynamicFormFieldComponent } from './dynamic-form-demo/components/dynamic-form-field/dynamic-form-field.component';
import {MatOptionModule} from "@angular/material/core";
import {MatFormFieldModule} from "@angular/material/form-field";
import { FieldErrorComponent } from './dynamic-form-demo/components/field-error/field-error.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    MenuComponent,
    FooterComponent,
    TimerComponent,
    InteractionParentComponent,
    InteractionChildComponent,
    CountdownTimerComponent,
    CountdownParentComponent,
    MissionControlComponent,
    AstronautComponent,
    TemplateParentComponent,
    TemplateChildComponent,
    ZippyContentDirective,
    TemplateDemoComponent,
    AdDirective,
    DynamicContentDemoComponent,
    AdBannerComponent,
    AdComponent,
    PopupComponent,
    CustomComponentDemoComponent,
    DirectiveContainerDemoComponent,
    EventInterceptorDirectiveDirective,
    HiddenDirective,
    ReactiveFormDemoComponent,
    TemplateDrivenFormDemoComponent,
    DynamicFormDemoComponent,
    DynamicFormFieldComponent,
    FieldErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatButtonToggleModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatGridListModule,
    MatCheckboxModule,
    MatSelectModule,
    MatOptionModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    LazyComponentDemoModule,
    CardModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false}
    ),
],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
