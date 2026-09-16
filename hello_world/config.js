import 'dotenv/config'

const config = {
    port: parseInt(process.env.PORT ?? "3000", 10),
    nodeENV: process.env.NODE_ENV,
    dbURL: process.env.DATABASE_URL,
    secretKey: process.env.API_KEY,
    isDeveopment: process.env.NODE_ENV == 'developement',
    isProduction: process.env.NODE_ENV == 'production',
}

export default config
