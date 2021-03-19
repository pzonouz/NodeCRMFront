import { Constants } from './../../shared/constants';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../shared/models/modals.module';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  AuthorizationHeader: string;
  constructor(private httpClient: HttpClient) {
    this.AuthorizationHeader = `Bearer ${localStorage.getItem('access_token')}`;
  }
  editUser(id: number, user: User) {
    return this.httpClient.put(`${Constants.API_URL}/auth/edit/${id}`, user, {
      headers: new HttpHeaders({ Authorization: this.AuthorizationHeader }),
    });
  }
  changePassword(username: string, newPassword: string) {
    return this.httpClient.put(
      `${Constants.API_URL}/auth/changePasswordByAdmin`,
      { username, newPassword },
      {
        headers: new HttpHeaders({ Authorization: this.AuthorizationHeader }),
      }
    );
  }
  deleteUser(id: number) {
    return this.httpClient.delete(
      `${Constants.API_URL}/auth/deleteUserByAdmin/${id}`,
      {
        headers: new HttpHeaders({ Authorization: this.AuthorizationHeader }),
      }
    );
  }
  createUser(user: User) {
    return this.httpClient.post(`${Constants.API_URL}/auth/register`, user, {
      headers: new HttpHeaders({ Authorization: this.AuthorizationHeader }),
    });
  }
  listUsers() {
    return this.httpClient.get(`${Constants.API_URL}/auth/users`, {
      headers: new HttpHeaders({ Authorization: this.AuthorizationHeader }),
    });
  }
}
