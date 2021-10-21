import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from '../../models/user.class';
import { UserService } from '../../services/user.service';
import { ModalUserComponent } from '../modal-user/modal-user.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = [
    'user',
    'email',
    'firstName',
    'lastName',
    'active',
    'action',
  ];
  dataUser: User[] = [];
  filterUser = {
    user: '',
    email: '',
    firstName: '',
    lastName: ''
  };

  constructor(private userService: UserService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.userService.users$.subscribe((users) => {
      this.dataUser = users;
    });

    this.userService.searchUser.subscribe( userSearch => {

      this.filterUser = {...userSearch}
    })
  }

  viewUser(user: User) {
    let dialogRef = this.dialog.open(ModalUserComponent, {
      width: '1050px',
      height: '300px',

      data: { readonly: true, user, title: 'Ver Usuario' },
    });
  }

  editUser(user: User) {
    let dialogRef = this.dialog.open(ModalUserComponent, {
      width: '1050px',
      height: '300px',

      data: { readonly: false, edit: true, user, title: 'Editar Usuario' },
    });
  }
}
