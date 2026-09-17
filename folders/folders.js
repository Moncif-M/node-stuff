import fs from "node:fs"

fs.rmdirSync("test2")


fs.mkdir("test2", () => 0)

console.log(existsSync("test2"))
