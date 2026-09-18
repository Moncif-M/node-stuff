import fs from "node:fs"



try {
    fs.existsSync("test2") ? console.log("folder exists") : fs.mkdir("test2")
} catch (error) {
    console.log(error)
}

