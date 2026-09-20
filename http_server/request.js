// get request
try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    console.log(`statusCode: ${response.status}`)
    const data = await response.json()
    console.log(data)
    console.log("xd")
} catch (error) {
    console.log(error)
}

// post request

try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            todo: "Buy the milk",  
        }),
    })
    console.log(`statusCode: ${response.status}`)
    const data = await response.json()
    console.log(data)
} catch (error) {
    console.log(error)
}
