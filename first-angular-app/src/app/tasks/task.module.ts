import { DeclarationListEmitMode } from "@angular/compiler";
import { NgModule } from "@angular/core";
import { TaskComponent } from "./task/task.component";
import { TasksComponent } from "./tasks.component";
import { NewTaskComponent } from "./new-task/new-task.component";

@NgModule({
    declarations:[TasksComponent,TaskComponent, NewTaskComponent]
})
export class TasksModule{}