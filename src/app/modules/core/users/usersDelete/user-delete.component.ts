import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';
import { User } from 'src/app/modules/shared/models/modals.module';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.scss'],
})
export class UsersDeleteComponent implements OnInit {
  constructor(
    public matDialogRef: MatDialogRef<UsersDeleteComponent>,
    private _snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: User,
    private userService: UsersService
  ) {}

  ngOnInit(): void {}
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
  onClose() {
    this.matDialogRef.close();
  }
  onDeleteConfirm() {
    this.userService.deleteUser(this.data.id).subscribe(
      (res) => {
        this.matDialogRef.close();
        this.openSnackBar('Successfully deleted.', '');
      },
      (err) => {
        this.openSnackBar(err, '');
      }
    );
  }
}
