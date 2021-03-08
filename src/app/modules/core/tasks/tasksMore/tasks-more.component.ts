import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject, Input } from '@angular/core';
import { Task } from 'src/app/modules/shared/models/modals.module';

@Component({
  selector: 'app-tasks-more',
  templateUrl: './tasks-more.component.html',
  styleUrls: ['./tasks-more.component.scss'],
})
export class TasksMoreComponent implements OnInit {
  constructor(
    public matDialogRef: MatDialogRef<TasksMoreComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Task
  ) {}

  ngOnInit(): void {}
}
