import {Component} from '@angular/core';
import {Task, Status} from './task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  status: Status = 'ALL';

  tasks: Task[] = [{
    label: 'Aller boire des bières',
    completed: false
  }, {
    label: 'Dormir',
    completed: true
  }, {
    label: 'Faire du sport (non je rigole)',
    completed: false
  }];

  removeTask(task: Task): void {
    this.tasks.splice(this.tasks.indexOf(task), 1);
  }

  addTask(input: HTMLInputElement): void {
    this.tasks.push({label: input.value, completed: false});
    input.value = '';
  }

  toggleAll(event): void {
    this.tasks.forEach(task => task.completed = event.target['checked']);
  }

  remainingTasks(): number {
    return this.tasks.filter(task => !task.completed).length;
  }

  isStatusALL() {
    return this.status === 'ALL';
  }

  setStatusALL(): void {
    this.status = 'ALL';
  }

  setStatusCOMPLETED(): void {
    this.status = 'COMPLETED';
  }

  isStatusCOMPLETED(): boolean {
    return this.status === 'COMPLETED';
  }

  setStatusACTIVE(): void {
    this.status = 'ACTIVE';
  }

  isStatusACTIVE(): boolean {
    return this.status === 'ACTIVE';
  }
}
