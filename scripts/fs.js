import fs from "node:fs/promises"
import fs2 from "node:fs"

try {
    const stats = await fs.stat("./text.txt")
    console.log(stats.size, stats.isFile(), stats.isDirectory(), stats.isSymbolicLink())
} catch (err) {
    console.log(err)
}

console.log("1")


fs2.stat("./text.txt", (err, data) => {
    if (err) {
        console.log(err)
        return
    }

    console.log(data.size, data.isFile())
})
