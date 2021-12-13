import { NgModule } from '@angular/core';
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
import {FormsModule} from "@angular/forms";
import { InteractionParentComponent } from './interaction-demo/interaction-parent/interaction-parent.component';
import { InteractionChildComponent } from './interaction-demo/interaction-child/interaction-child.component';
import { CountdownTimerComponent } from './local-var-interaction-demo/countdown-timer/countdown-timer.component';
import { CountdownParentComponent } from './local-var-interaction-demo/countdown-parent/countdown-parent.component';
import { MissionControlComponent } from './interaction-via-service/mission-control/mission-control.component';
import { AstronautComponent } from './interaction-via-service/astronaut/astronaut.component';

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
    MatInputModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
