import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-tasks-create',
  templateUrl: './tasks-create.component.html',
  styleUrls: ['./tasks-create.component.scss'],
})
export class TasksCreateComponent implements OnInit {
  constructor(
    public matDialogRef: MatDialogRef<TasksCreateComponent>,
    private taskService: TasksService,
    private _snackBar: MatSnackBar
  ) {}
  taskCreate: FormGroup;
  ngOnInit(): void {
    this.taskCreate = new FormGroup({
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
    });
  }
  onCloseClick($event) {
    this.matDialogRef.close();
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  onSubmit($event) {
    this.taskService.createTask(this.taskCreate.value).subscribe(
      (res) => {
        this.matDialogRef.close();
        this.openSnackBar('Successfully Created!', '');
      },
      (err) => {
        this.openSnackBar(err.error.text, '');
      },
      () => {
        console.log('completed');
      }
    );
  }
}
