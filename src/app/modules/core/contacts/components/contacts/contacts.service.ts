import { Contact } from '../../../../shared/models/modals.module';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Constants } from 'src/app/modules/shared/constants';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  AuthorizationHeader: string;
  constructor(private httpClient: HttpClient) {
    this.AuthorizationHeader = `Bearer ${localStorage.getItem('access_token')}`;
  }

  getContacts() {
    const contacts = this.httpClient.get(`${Constants.API_URL}/contacts`, {
      headers: new HttpHeaders({
        Authorization: this.AuthorizationHeader,
      }),
    });
    return contacts;
  }
  public editContact(id: number, contact: Contact) {
    return this.httpClient.put(
      `${Constants.API_URL}/contacts/edit/${id}`,
      contact,
      {
        headers: new HttpHeaders({
          Authorization: this.AuthorizationHeader,
        }),
      }
    );
  }
  public createContact(contact: Contact) {
    return this.httpClient.post(
      `${Constants.API_URL}/contacts/create`,
      contact,
      {
        headers: new HttpHeaders({
          Authorization: this.AuthorizationHeader,
        }),
      }
    );
  }
  public deleteContact(id: number) {
    return this.httpClient.delete(
      `${Constants.API_URL}/contacts/delete/${id}`,
      {
        headers: new HttpHeaders({
          Authorization: this.AuthorizationHeader,
        }),
      }
    );
  }
}
