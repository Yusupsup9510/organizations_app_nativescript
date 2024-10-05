import { Component, OnInit } from '@angular/core'
import { RouterExtensions } from '@nativescript/angular'

interface Room {
  id: number
  name: string
}

@Component({
  selector: 'ns-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  rooms: Room[] = []
  newRoomName: string = ''

  constructor(private routerExtensions: RouterExtensions) {}

  ngOnInit() {
    // Load rooms from storage or API
    this.rooms = [
      { id: 1, name: 'Living Room' },
      { id: 2, name: 'Kitchen' },
      { id: 3, name: 'Bedroom' }
    ]
  }

  addRoom() {
    if (this.newRoomName) {
      const newRoom: Room = {
        id: this.rooms.length + 1,
        name: this.newRoomName
      }
      this.rooms.push(newRoom)
      this.newRoomName = ''
    }
  }

  goToRoom(roomId: number) {
    this.routerExtensions.navigate(['/room', roomId])
  }
}