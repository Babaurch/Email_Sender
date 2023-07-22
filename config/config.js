import dotenv from "dotenv"

dotenv.config()

const config = {
    PORT: process.env.PORT || 8008,
    API_KEY: process.env.API_KEY
}

export default config