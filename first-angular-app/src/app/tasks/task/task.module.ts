import { NgModule } from "@angular/core";
import { CardComponent } from "../../shared/card/card.component";
import { DatePipe } from "@angular/common";

@NgModule({
    declarations:[CardComponent, DatePipe]
})
export class TaskModule{}