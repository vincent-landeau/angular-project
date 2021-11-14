import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noQuotes'
})
export class NoQuotesPipe implements PipeTransform {

  transform(input: string): string {
    return input.replace(/['"]+/g, '');
  }

}
