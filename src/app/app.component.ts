import {Component} from '@angular/core';
import {Status, Task} from './task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  remainingTasks = 0;

  status = 'ALL';

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

  toggleComplete(task: Task): void {
    task.completed = !task.completed;
  }

  removeTask(task: Task): void {
    this.tasks.splice(this.tasks.indexOf(task), 1);
  }

  addTask(label: string): void {
    this.tasks.push({label, completed: false});
  }

  toggleAll(event: Event) {
    this.tasks.forEach(task => task.completed = event.target['checked']);
  }

  setStatus(status: Status): void {
    this.status = status;
  }

}
