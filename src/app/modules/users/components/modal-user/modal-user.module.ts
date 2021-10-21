import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalUserComponent } from './modal-user.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ModalUserComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class ModalUserModule { }
