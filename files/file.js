import fs from "node:fs/promises"
import fs2 from "node:fs"

const path = "./test.txt"

const content = "Hello world! i'm a program"

try {
    await fs.writeFile(path, content)
} catch (error) {
    console.log(error)
}

let data = undefined
try {
    data = await fs.readFile(path, "utf8")
} catch (error) {
    console.log(error)
}


let data2 = undefined
try {
    data2 = await fs.readFile("./text2.txt", "utf8")
} catch (error) {
    console.log(error)
}

console.log(data2)

console.log(data)
