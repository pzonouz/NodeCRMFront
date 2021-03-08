import { Constants } from './../../shared/constants';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../../shared/models/modals.module';
@Injectable({
  providedIn: 'root',
})
export class TasksService {
  AuthorizationHeader: string;
  constructor(private httpClient: HttpClient) {
    this.AuthorizationHeader = `Bearer ${localStorage.getItem('access_token')}`;
  }
  getTasks() {
    return this.httpClient.get(`${Constants.API_URL}/tasks`, {
      headers: new HttpHeaders({
        Authorization: this.AuthorizationHeader,
      }),
    });
  }
  createTask(task: Task) {
    return this.httpClient.post(`${Constants.API_URL}/tasks/create`, task, {
      headers: new HttpHeaders({
        Authorization: this.AuthorizationHeader,
      }),
    });
  }
  deleteTask(id: number) {
    return this.httpClient.delete(`${Constants.API_URL}/tasks/delete/${id}`, {
      headers: new HttpHeaders({
        Authorization: this.AuthorizationHeader,
      }),
    });
  }
  editTask(id: number, task: Task) {
    return this.httpClient.put(
      `${Constants.API_URL}/tasks/edit/${id}`,
      task,
      {
        headers: new HttpHeaders({
          Authorization: this.AuthorizationHeader,
        }),
      }
    );
  }
}
