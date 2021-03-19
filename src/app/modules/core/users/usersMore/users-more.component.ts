import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject, Input } from '@angular/core';
import { User } from 'src/app/modules/shared/models/modals.module';

@Component({
  selector: 'app-users-more',
  templateUrl: './users-more.component.html',
  styleUrls: ['./users-more.component.scss'],
})
export class UsersMoreComponent implements OnInit {
  constructor(
    public matDialogRef: MatDialogRef<UsersMoreComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User
  ) {}

  ngOnInit(): void {}
}
