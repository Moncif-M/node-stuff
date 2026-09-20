import { dirname } from "node:path"
import { fileURLToPath } from "node:url"
import http from "node:http"
import fs from "node:fs/promises"

const __dirname = dirname(fileURLToPath(import.meta.url))

console.log(__dirname)


const server = http.createServer(async function (req, res) {
    try {
        const data = await fs.readFile(`${__dirname}/data.txt`)
        res.end(data)
        console.log("hello")
    } catch (error) {
        res.statusCode = 500
        res.end("Error reading the file")
    }
})

server.listen(3000)
