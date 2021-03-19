import { MaterialModule } from './../../shared/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users/users.component';
import { UsersMoreComponent } from './usersMore/users-more.component';
import { UsersEditComponent } from './usersEdit/users-edit.component';
import { UsersDeleteComponent } from './usersDelete/user-delete.component';
import { UsersCreateComponent } from './usersCreate/users-create.component';
import { SharedModule } from '../../shared/shared.module';

export class User {
  userId: number;
  username: string;
  password: string;
  role: string;
}

@NgModule({
  declarations: [
    UsersComponent,
    UsersCreateComponent,
    UsersMoreComponent,
    UsersDeleteComponent,
    UsersEditComponent,
  ],
  imports: [CommonModule, UsersRoutingModule, MaterialModule, SharedModule],
})
export class UsersModule {}
