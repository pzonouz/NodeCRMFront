import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users-create',
  templateUrl: './users-create.component.html',
  styleUrls: ['./users-create.component.scss'],
})
export class UsersCreateComponent implements OnInit {
  constructor(
    public matDialogRef: MatDialogRef<UsersCreateComponent>,
    private userService: UsersService,
    private _snackBar: MatSnackBar
  ) {}
  userCreate: FormGroup;
  ngOnInit(): void {
    this.userCreate = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(15),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(15),
      ]),
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
    this.userService.createUser(this.userCreate.value).subscribe(
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
