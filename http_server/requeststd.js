import https from "node:https"
// get request
//     hostname: "jsonplaceholder.typicode.com",
//     port: 443,
//     path: "/todos/1",
//     method: "GET",
// }
//
// const req = https.request(options, (res) => {
//     console.log(`statusCode: ${res.statusCode}`)
//
//     // res.on("data", (d) => {
//     //     process.stdout.write(d)
//     // })
//
//     res.pipe(process.stdout)
// })
//
// req.on("error", (error) => {
//     console.log(error)
// })
//
// req.end()

// post request

const data = JSON.stringify({
    todo: "Buy the milk",
})

const postOptions = {
    hostname: "jsonplaceholder.typicode.com",
    port: 443,
    path: "/posts",
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Content-Length": data.length
    },
}

const postReq = https.request(postOptions, (res) => {
    console.log(`statusCode: ${res.statusCode}`)

    res.on("data", (d) => {
        process.stdout.write(d)
    })

    res.on("error", (e) => {
        console.log(e)
    })
})

postReq.write(data)
postReq.end()














