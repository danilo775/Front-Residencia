import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeTeste'
})
export class PipeTestePipe implements PipeTransform {

  transform(value:string) {
    
    return value.toString().toUpperCase();
  }

}
