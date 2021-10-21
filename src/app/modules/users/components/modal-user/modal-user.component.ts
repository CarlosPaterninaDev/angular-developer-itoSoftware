import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material/snack-bar';
import { User } from '../../models/user.class';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-modal-user',
  templateUrl: './modal-user.component.html',
  styleUrls: ['./modal-user.component.scss'],
})
export class ModalUserComponent implements OnInit {
  readonly = false;
  editForm = false;
  title = 'Creación de usuario';
  public userForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
  ) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      id: [],
      email: [null, [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")] ],
      user: [null, Validators.required],
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      active: [true, Validators.required],
    });

    if (this.data) {
      this.readonly = this.data.readonly;
      this.editForm = this.data.edit;
      this.title = this.data.title;
      this.userForm.patchValue({ ...this.data.user });
      this.checkReadOnly();
    }
  }

  handleSubmit() {
    if (this.userForm.invalid) {
      this.openSnackBar('Formulario Inválido verifique los campos requeridos')

      return;
    }

    if (this.editForm) {
      this.userService.updateUser(this.userForm.value);
      this.dialog.closeAll()

      this.openSnackBar('Usuario Actualizado exitosamente')
    } else {
      this.createNewUser();
    }

    this.userForm.reset();
  }

  createNewUser() {
    const user: User = new User(this.userForm.value);
    this.userService.createNewUser(user);
  }

  checkReadOnly() {
    if (this.readonly) {
      this.userForm.disable();
    }
  }


  
  openSnackBar(
    message: string,
    action?: string
  ): MatSnackBarRef<SimpleSnackBar> {
    return this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
