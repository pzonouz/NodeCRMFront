import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/modules/shared/models/modals.module';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users-edit',
  templateUrl: './users-edit.component.html',
  styleUrls: ['./users-edit.component.scss'],
})
export class UsersEditComponent implements OnInit {
  constructor(
    public matDialogRef: MatDialogRef<UsersEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User,
    private userService: UsersService,
    private _snackBar: MatSnackBar
  ) {}
  passwordEnable: Boolean;
  userEdit: FormGroup;
  passwordSet: FormGroup;

  ngOnInit(): void {
    this.passwordEnable = false;
    this.userEdit = new FormGroup({
      username: new FormControl(this.data.username, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(15),
      ]),
    });
    this.passwordSet = new FormGroup({
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required]),
    });
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
  onSubmit($event) {
    $event.preventDefault();
    console.log(this.data.id);
    this.userService.editUser(this.data.id, this.userEdit.value).subscribe(
      (res) => {
        this.matDialogRef.close();
        this.openSnackBar('Successfully edited', '');
      },
      (err) => {
        console.log(err);
        this.openSnackBar(err.error.text, '');
      }
    );
  }
  onPasswordVisibleToggle() {
    console.log(this.passwordEnable);
    this.passwordEnable = !this.passwordEnable;
  }
  onPasswordSubmit($event) {
    this.userService
      .changePassword(this.data.username, this.passwordSet.value.password)
      .subscribe(
        (res) => {
          this.matDialogRef.close();
          this.openSnackBar('Successfully edited', '');
        },
        (err) => {
          console.log(err);
          this.openSnackBar(err.error.text, '');
        }
      );
  }
  onCloseClick($event) {
    $event.preventDefault();
    this.matDialogRef.close();
  }
}
