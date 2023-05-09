import { Component } from '@angular/core';
import { UtilityService } from 'src/app/services/utility/utility.service';
import { Todo } from 'src/app/model/todo';
import { DataService } from 'src/app/services/data/data.service';
import { ITodo } from 'src/app/model/i-todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
 todoArray: ITodo[] = []

  constructor(private utilityService: UtilityService, private dataS: DataService){
  // const todo1 = new Todo('comprare il pane', false);
  // const todo2 = new Todo('buttare la spazzatura', false);
  // const todo3 = new Todo('pagare le bollette', false);
  //this.todoArray =[todo1, todo2, todo3]
  this.dataS.getData().then(data => {
    console.log(data);
    this.todoArray = data
    console.log(this.todoArray);

  })
  }

  sortTodo():void{
    this.todoArray = this.utilityService.sortArrayAlphabetically(this.todoArray);

 }
}
