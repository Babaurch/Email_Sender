import dotenv from "dotenv"

dotenv.config()

const config = {
    PORT: process.env.PORT || 8008
}

export default config