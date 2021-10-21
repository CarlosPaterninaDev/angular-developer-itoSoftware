import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { User } from '../../models/user.class';
import { UserService } from '../../services/user.service';
import { ModalUserComponent } from '../modal-user/modal-user.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() title = '';

  public userForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      email: [''],
      user: [''],
      firstName: [''],
      lastName: [''],
    });

    this.userForm.valueChanges.subscribe((values) => {
      this.userService.searchUser.emit(values);
    });
  }

  handleSearch() {
    this.userForm.patchValue({
      email: '',
      user: '',
      firstName: '',
      lastName: '',
    });

    console.log(this.userForm.value);
  }

  createUser() {
    let dialogRef = this.dialog.open(ModalUserComponent, {
      width: '1050px',
      height: '350px',
    });
  }
}
