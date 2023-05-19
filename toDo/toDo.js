import { LightningElement,track } from 'lwc';

export default class ToDo extends LightningElement {
    @track todoTasks=[
        {
            id : 1,
            name : 'Task 1'
        }
    ];

    newTask='';

    updateNewtask(event){
        this.newTask=event.target.value;
        //console.log(this.newTask)
    }

  addTask(event)
  {
    this.todoTasks.push({
            id : this.todoTasks.length + 1,
            name : this.newTask
        });
        this.newTask='';    
  }
}