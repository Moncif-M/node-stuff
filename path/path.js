import path from "node:path"

const filePath = "../path/notes.txt"

console.log(
    path.dirname(filePath),
    path.basename(filePath),
    path.extname(filePath)
)


console.log(path.resolve("notes.txt"), path.normalize("/sda/das///sd/../lol.txt"))
