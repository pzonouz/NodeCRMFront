import { Router } from '@angular/router';
import { Component, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Constants } from 'src/app/modules/shared/constants';
import { UsersService } from '../users.service';
import { User } from 'src/app/modules/shared/models/modals.module';
import { UsersMoreComponent } from '../usersMore/users-more.component';
import { UsersEditComponent } from '../usersEdit/users-edit.component';
import { UsersDeleteComponent } from '../usersDelete/user-delete.component';
import { UsersCreateComponent } from '../usersCreate/users-create.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    private usersService: UsersService,
    private router: Router
  ) {}
  //This is for label on top of  navigation bar
  label: string = 'users';
  users: User[] = [];
  ngOnInit(): void {
    this.usersService.listUsers().subscribe(
      (result: User[]) => {
        if (result.length !== 0) {
          this.users = result;
        }
      },
      (err) => {
        localStorage.removeItem('access_token');
        this.router.navigate(['']);
      }
    );
  }
  onUserMore(id: number) {
    const dialogRef = this.dialog.open(UsersMoreComponent, {
      height: Constants.dialog_Height,
      width: '280px',
      data: this.users.find((x) => x.id === id),
      panelClass: 'dialogBox',
    });
  }
  onUserEdit(id: number) {
    const dialogRef = this.dialog.open(UsersEditComponent, {
      height: '280px',
      width: '280px',
      data: this.users.find((x) => x.id === id),
      panelClass: 'dialogBox',
    });
    dialogRef.afterClosed().subscribe(() => {
      setTimeout(() => location.reload(), 2000);
    });
  }
  onUserDelete(id: number) {
    const dialogRef = this.dialog.open(UsersDeleteComponent, {
      height: '140px',
      width: '280px',
      data: this.users.find((x) => x.id === id),
      panelClass: 'dialogBox',
    });
    dialogRef.afterClosed().subscribe(() => {
      setTimeout(() => location.reload(), 2000);
    });
  }
  onUserCreate() {
    const dialogRef = this.dialog.open(UsersCreateComponent, {
      height: Constants.dialog_Height,
      width: '280px',
      panelClass: 'dialogBox',
    });
    dialogRef.afterClosed().subscribe(() => {
      setTimeout(() => location.reload(), 2000);
    });
  }
}
