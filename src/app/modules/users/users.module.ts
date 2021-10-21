import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { HeaderModule } from './components/header/header.module';
import { TableModule } from './components/table/table.module';
import { MaterialModule } from 'src/app/shared/material.module';


@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    TableModule,
    MaterialModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
