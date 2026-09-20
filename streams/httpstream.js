import fs from "node:fs"
import http from "node:http"
import { dirname } from "node:path"
import { fileURLToPath } from "node:url"


const __dirname = dirname(fileURLToPath(import.meta.url))

const servr = http.createServer((req, res) => {
    const stream = fs.createReadStream(`${__dirname}/data.txt`)
    console.log(stream.pipe(res))
    console.log("---------------------------")
    console.log(res)
})

servr.listen(3000)
