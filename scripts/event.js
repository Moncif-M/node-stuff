import { EventEmitter } from "node:events"

const eventEmitter = new EventEmitter

eventEmitter.on("start", (n1, n2) => {
    console.log(`started from ${n1} to ${n2}`)
})

eventEmitter.emit("start", 23, 100)
