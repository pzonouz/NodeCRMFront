import { SharedModule } from './../../shared/shared.module';
import { MaterialModule } from './../../shared/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { TasksComponent } from './tasks/tasks.component';
import { TasksCreateComponent } from './tasksCreate/tasks-create.component';
import { TasksDeleteComponent } from './tasksDelete/tasks-delete.component';
import { TasksEditComponent } from './tasksEdit/tasks-edit.component';
import { TasksMoreComponent } from './tasksMore/tasks-more.component';

@NgModule({
  imports: [CommonModule, TasksRoutingModule, MaterialModule, SharedModule],
  declarations: [
    TasksDeleteComponent,
    TasksComponent,
    TasksCreateComponent,
    TasksEditComponent,
    TasksMoreComponent,
  ],
  providers: [],
})
export class TasksModule {}
