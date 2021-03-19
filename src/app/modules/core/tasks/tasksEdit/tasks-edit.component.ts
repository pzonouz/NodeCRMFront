import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TasksService } from '../tasks.service';
import { Task } from 'src/app/modules/shared/models/modals.module';

@Component({
  selector: 'app-tasks-edit',
  templateUrl: './tasks-edit.component.html',
  styleUrls: ['./tasks-edit.component.scss'],
})
export class TasksEditComponent implements OnInit {
  constructor(
    public matDialogRef: MatDialogRef<TasksEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Task,
    private taskService: TasksService,
    private _snackBar: MatSnackBar
  ) {}
  taskEdit: FormGroup;
  ngOnInit(): void {
    this.taskEdit = new FormGroup({
      name: new FormControl(this.data.name, [Validators.required]),
      description: new FormControl(this.data.description, [
        Validators.required,
      ]),
    });
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
  onSubmit($event) {
    $event.preventDefault();
    this.taskService.editTask(this.data.id, this.taskEdit.value).subscribe(
      (res) => {
        this.matDialogRef.close();
        this.openSnackBar('Successfully edited', '');
      },
      (err) => {
        this.openSnackBar(err.error.text, '');
      }
    );
  }

  onCloseClick($event) {
    $event.preventDefault();
    this.matDialogRef.close();
  }
}
