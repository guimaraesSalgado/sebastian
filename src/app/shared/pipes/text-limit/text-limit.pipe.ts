import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textLimit'
})
export class TextLimitPipe implements PipeTransform {
  transform(value: string, limit: number, toBeContinue: boolean = true): string {
    if (value.length > limit) {
      const newValue = value.substring(0, limit);
      return toBeContinue ? newValue + '...' : newValue;
    }
    return value;
  }

}
