import { TASKS } from './../mock-tasks';
import { Task } from './../Task';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class TaskService {


  constructor() { }

  getTasks(): Task[] {
    return TASKS;
  }
}
