export function createUser({name, email, age}) {
    if (!name || typeof name !== "string") {
        throw new Error("Invalid or missing name")
    }

    if (!email || !email.includes("@")) {
        throw new Error("Invalid email address")
    }

    const parsedAge = Number(age)
    if (isNaN(parsedAge) || parsedAge < 18) {
        throw new Error("Age must be at least 18")
    }

    return {
        name: name.trim(),
        email: email.toLowerCase().trim(),
        age: parsedAge,
        createdAt: new Date().toISOString(),
    }
}
