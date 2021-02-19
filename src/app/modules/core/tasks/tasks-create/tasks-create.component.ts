import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-tasks-create',
  templateUrl: './tasks-create.component.html',
  styleUrls: ['./tasks-create.component.scss'],
})
export class TasksCreateComponent implements OnInit {
  constructor(private tasksService: TasksService) { }

  tasksCreate = new FormGroup({
    taskName: new FormControl('', [Validators.required]),
    taskDescription: new FormControl('', [Validators.required]),
  });
  ngOnInit(): void {
  }

  onSubmit() {
    this.tasksService.createTask(this.tasksCreate.value)
  }
}
