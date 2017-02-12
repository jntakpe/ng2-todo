import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'taskPipe'
})
export class TaskPipe implements PipeTransform {

  transform(value: any, ...args): any {
    return null;
  }

}
