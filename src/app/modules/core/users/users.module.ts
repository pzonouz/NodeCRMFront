import { MaterialModule } from './../../shared/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users/users.component';
import { UsersCreateComponent } from './usersCreate/users-create.component';

export class User {
  userId: number;
  username: string;
  password: string;
  role: string;
}

@NgModule({
  declarations: [UsersComponent, UsersCreateComponent],
  imports: [CommonModule, UsersRoutingModule, MaterialModule],
})
export class UsersModule { }
