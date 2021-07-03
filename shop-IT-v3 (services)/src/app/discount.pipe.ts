import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount'
})
export class DiscountPipe implements PipeTransform {

  transform(value: number, ...args: Array<number>): number {
    if (args[0])
      return value - args[0];
    else return value - 1;
  }

}
