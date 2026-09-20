import http from "node:http"

const port = process.env.PORT || 3000

// const server = http.createServer((req, res) => {
//     res.statusCode = 200
//     res.setHeader("Content-Type", "text/html")
//     res.end("<h1>Hello, World!</h1>")
// })
//

const server = http.createServer((req, res) => {
    let data = ""
    req.on("data", (chunck) => {
        data += chunck
    })
    req.on("end", () => {
        console.log(JSON.parse(data).todo)
        res.end()
    })
})

server.listen(port, () => {
    console.log(`server running at port ${port}`)
})
