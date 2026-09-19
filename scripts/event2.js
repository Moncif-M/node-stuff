import { EventEmitter } from "node:events"

const door = new EventEmitter()

const slam = {
    action: "close"
}

door.addListener(slam, () => console.log("the door has been closed"))

door.emit(slam)

console.log(door.eventNames())
