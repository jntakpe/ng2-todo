import {Component} from '@angular/core';
import {Task} from './task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  remainingTasks = 0;

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

  toggleComplete(task: Task) {
    task.completed = !task.completed;
  }

}
