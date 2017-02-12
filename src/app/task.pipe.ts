import { Pipe, PipeTransform } from '@angular/core';
import { Status, Task } from './task.model';

@Pipe({
  name: 'taskStatus'
})
export class TaskPipe implements PipeTransform {

  transform(tasks: Task[], status: Status): Task[] {
    if (status === 'ALL') {
      return tasks;
    }
    return tasks.filter(task => status === 'COMPLETED' ? task.completed : !task.completed);
  }

}
