import readline from 'node:readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.question("What's your name?\n", (name) => {
    console.log(`Hello ${name}!\n`)
    rl.close()
})
