import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterColumn',
})
export class FilterColumnPipe implements PipeTransform {
  transform(array: any[], text: string, column: string): any[] {
    if (text === '') {
      return array;
    }

    text = text.toLowerCase();

    const newArray = array.filter((item) => {
      return item[column].toLowerCase().includes(text);
    });



    return newArray;
  }
}
