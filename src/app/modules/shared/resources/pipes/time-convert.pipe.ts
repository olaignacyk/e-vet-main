import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minutesConvert',
})
export class MinutesConvertPipe implements PipeTransform {
  transform(value: number): string {
    value = Math.round(value);
    if (value == 0 || value == undefined) {
      return '';
    }
    if (value >= 60) {
      if (value % 60 == 0) {
        return value / 60 + ' h ';
      } else {
        return Math.floor(value / 60) + ' h ' + (value % 60) + ' min';
      }
    } else {
      return value + ' min';
    }
  }
}
