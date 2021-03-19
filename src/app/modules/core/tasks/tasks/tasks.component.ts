import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Constants } from 'src/app/modules/shared/constants';
import { Task } from 'src/app/modules/shared/models/modals.module';
import { TasksCreateComponent } from '../tasksCreate/tasks-create.component';
import { TasksDeleteComponent } from '../tasksDelete/tasks-delete.component';
import { TasksEditComponent } from '../tasksEdit/tasks-edit.component';
import { TasksService } from '../tasks.service';
import { TasksMoreComponent } from '../tasksMore/tasks-more.component';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    private tasksService: TasksService,
    private router: Router
  ) {}
  //This is for label on top of  navigation bar
  label: string = 'Tasks';
  tasks = [];
  ngOnInit(): void {
    this.tasksService.getTasks().subscribe(
      (result: Task[]) => {
        if (result.length !== 0) {
          this.tasks = result;
        }
      },
      (err) => {
        localStorage.removeItem('access_token');
        this.router.navigate(['']);
      }
    );
  }
  onTasksCreate() {
    const dialogRef = this.dialog.open(TasksCreateComponent, {
      height: Constants.dialog_Height,
      width: '280px',
      panelClass: 'dialogBox',
    });
    dialogRef.afterClosed().subscribe(() => {
      setTimeout(() => location.reload(), 2000);
    });
  }
  onTasksMore(id: number) {
    const dialogRef = this.dialog.open(TasksMoreComponent, {
      height: Constants.dialog_Height,
      width: '280px',
      data: this.tasks.find((x) => x.id === id),
      panelClass: 'dialogBox',
    });
  }
  onTaskEdit(id: number) {
    console.log(this.tasks);
    const dialogRef = this.dialog.open(TasksEditComponent, {
      height: Constants.dialog_Height,
      width: '280px',
      data: this.tasks.find((x) => x.id === id),
      panelClass: 'dialogBox',
    });
    dialogRef.afterClosed().subscribe(() => {
      setTimeout(() => location.reload(), 2000);
    });
  }
  onTaskDelete(id: number) {
    const dialogRef = this.dialog.open(TasksDeleteComponent, {
      height: '140px',
      width: '280px',
      data: this.tasks.find((x) => x.id === id),
      panelClass: 'dialogBox',
    });
    dialogRef.afterClosed().subscribe(() => {
      setTimeout(() => location.reload(), 2000);
    });
  }
}
