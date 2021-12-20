import {NgModule} from "@angular/core";
import {CardComponent} from "./card.component";
import {MatCardModule} from "@angular/material/card";

@NgModule({
  declarations: [
    CardComponent,
  ],
  imports: [
    MatCardModule,
  ],
  exports: [
    CardComponent
  ],
})
export class CardModule {}
