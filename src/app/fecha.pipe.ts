import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fecha'
})
export class FechaPipe implements PipeTransform {
  today: number = Date.now();

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
