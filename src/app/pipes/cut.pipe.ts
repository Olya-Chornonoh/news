import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cut'
})
export class CutPipe implements PipeTransform {
  transform(value: string, length = 100): string {
    if(value.length < length) return value;
    return value.substring(0, length) + "...";
  }

}
