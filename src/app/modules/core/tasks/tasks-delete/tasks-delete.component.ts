import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Task } from 'src/app/modules/shared/models/modals.module';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-tasks-delete',
  templateUrl: './tasks-delete.component.html',
  styleUrls: ['./tasks-delete.component.scss'],
})
export class TasksDeleteComponent implements OnInit {
  constructor(
    public matDialogRef: MatDialogRef<TasksDeleteComponent>,
    private _snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: Task,
    private taskService: TasksService
  ) {}

  ngOnInit(): void {}
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
  onClose() {
    this.matDialogRef.close();
  }
  onDeleteConfirm() {
    this.taskService.deleteTask(this.data.id).subscribe(
      (res) => {
        this.matDialogRef.close();
        this.openSnackBar('Successfully deleted.', '');
      },
      (err) => {
        this.openSnackBar(err, '');
      }
    );
  }
}
