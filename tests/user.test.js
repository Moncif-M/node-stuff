import { describe, it } from "node:test"
import assert from "node:assert/strict"
import { createUser } from "./user.js"

describe("createUser()", () => {
    
    it("should return a valid user object when given valid inputs", () => {
        const input = {
            name: "Mouad Moncif ",
            email: "mouadmoncIF1@gmail.com ",
            age: "23",
        }

        const user = createUser(input)

        assert.strictEqual(user.name, "Mouad Moncif")
        assert.strictEqual(user.email, "mouadmoncif1@gmail.com")
        assert.strictEqual(user.age, 23)
        assert.ok(user.createdAt, "createdAt should be defined")
    })

    it("should throw an error if email is missing or invalid", () => {
        const invalidInput = {
            name: "Mouad",
            email: "invalid-email",
            age: 24,
        }

        assert.throws(() => createUser(invalidInput), {message: "Invalid email address"})
    })

    it("should throw an error if user is underage", () => {
        const invalidInput = {
            name: "Mouad Moncif",
            email: "mouadmoncif1@gmail.com",
            age: 16,
        }
        
        assert.throws(() => createUser(invalidInput), {message: "Age must be at least 18"})
    })
})
