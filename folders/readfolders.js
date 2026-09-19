import fs from "node:fs"
import path from "node:path"

const dirPath = "/home/Viber/node_handbook/folders"

fs.readdir(dirPath, (err, data) => {
    if (err) throw err
    console.log(data.map((file) => path.join(dirPath, file)))
})



