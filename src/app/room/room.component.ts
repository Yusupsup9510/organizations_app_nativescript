import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

interface Task {
  id: number
  name: string
  completed: boolean
}

@Component({
  selector: 'ns-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  roomId: number
  roomName: string = ''
  tasks: Task[] = []
  newTaskName: string = ''

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.roomId = +this.route.snapshot.params.id
    // Load room details and tasks from storage or API
    this.roomName = `Room ${this.roomId}`
    this.tasks = [
      { id: 1, name: 'Clean', completed: false },
      { id: 2, name: 'Organize', completed: true }
    ]
  }

  addTask() {
    if (this.newTaskName) {
      const newTask: Task = {
        id: this.tasks.length + 1,
        name: this.newTaskName,
        completed: false
      }
      this.tasks.push(newTask)
      this.newTaskName = ''
    }
  }

  toggleTask(task: Task) {
    task.completed = !task.completed
  }
}