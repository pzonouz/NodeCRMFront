import { Contact } from '../../../../shared/models/modals.module';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const host = 'http://192.168.1.100:3000';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  AuthorizationHeader: string;
  constructor(private httpClient: HttpClient) {
    this.AuthorizationHeader = `Bearer ${localStorage.getItem('access_token')}`;
  }

  getContacts() {
    const contacts = this.httpClient.get(`${host}/contacts`, {
      headers: new HttpHeaders({
        Authorization: this.AuthorizationHeader,
      }),
    });
    return contacts;
  }
  public editContact(id: number, contact: Contact) {
    return this.httpClient.put(`${host}/contacts/edit/${id}`, contact, {
      headers: new HttpHeaders({
        Authorization: this.AuthorizationHeader,
      }),
    });
  }
  public createContact(contact: Contact) {
    return this.httpClient.post(`${host}/contacts/create`, contact, {
      headers: new HttpHeaders({
        Authorization: this.AuthorizationHeader,
      }),
    });
  }
  public deleteContact(id: number) {
    return this.httpClient.delete(`${host}/contacts/delete/${id}`, {
      headers: new HttpHeaders({
        Authorization: this.AuthorizationHeader,
      }),
    });
  }
}
