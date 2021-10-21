import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'activeUser'
})
export class ActiveUserPipe implements PipeTransform {

  transform(value: unknown): string {

    if(value === 'true' ||  value === true){

      return 'Activo'
    }else{
      return 'Inactivo'

    }

  }

}
