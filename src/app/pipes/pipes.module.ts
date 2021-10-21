import { NgModule } from '@angular/core';
import { ActiveUserPipe } from './active-user.pipe';
import { FilterColumnPipe } from './filter-column.pipe';



@NgModule({
  declarations: [
    ActiveUserPipe,
    FilterColumnPipe
  ],

  exports: [
    ActiveUserPipe,
    FilterColumnPipe
  ]
})
export class PipesModule { }
