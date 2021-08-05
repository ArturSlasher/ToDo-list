import { Component} from '@angular/core';
import { TaskPriority } from 'src/app/modules/task-priority.enum';
import { Task } from 'src/app/modules/task.interface';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent{

  tasks: Task[] = [
    {
      name: 'Помыть машину', 
      priority: TaskPriority.LOW, 
      description: "Надо отвезти машину в автомойку",
      assignee: "admin",
      done: true,
      estimation: 2,
      tags: ['быт']
    },
    {
      name: 'Сделать домашку', 
      priority: TaskPriority.URGENT, 
      description: "Надо сдать домашку за лекцию за 13.07",
      assignee: "Artur",
      done: false,
      estimation: 3,
      tags: ['курс по фронтенду']
    },
    {
      name: 'Выгулять собаку', 
      priority: TaskPriority.URGENT, 
      description: "Надо погулять с собакой завтра утром",
      assignee: "Me",
      done: false,
      estimation: 1,
      tags: ['быт']
    },
  ];

  constructor() { }

  sortTasks() {
    return this.tasks.sort((a) => a.done ? 1 : -1);
  }

  deleteTask(task: Task) {
    this.tasks = this.tasks.filter(el => el != task);
  }
}
