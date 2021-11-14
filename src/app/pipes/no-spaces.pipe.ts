import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noSpaces'
})
export class NoSpacesPipe implements PipeTransform {

  transform(input: string): string {
    return input.replace(/\s/g, '');
  }

}
