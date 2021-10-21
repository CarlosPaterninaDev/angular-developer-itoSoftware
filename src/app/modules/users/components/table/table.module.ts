import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { PipesModule } from 'src/app/pipes/pipes.module';


@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    PipesModule

  ],
  exports: [
    TableComponent
  ]
})
export class TableModule { }
