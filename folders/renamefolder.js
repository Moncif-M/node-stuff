import fs from "node:fs"
import fsr from "node:fs/promises"

const dirPath = "/home/Viber/node_handbook/folders"

fs.rename(dirPath, "../foldersScript", (err) => {
    if (err) {
        console.log(err)
    }
})

async function remove(dir) {
    try {
        await fsr.rm(dir, { recursive: true, force: true })
        console.log(`${dir} is deleted`)
    } catch (err) {
        console.log(err)       
    }
}

remove("test")
