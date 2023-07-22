import config from "./config.js";
import nodemailer from "nodemailer";
import Transport from "nodemailer-sendinblue-transport";



export const transporter = async () => {
    const apiKey = config.API_KEY;
    try {
        await nodemailer.createTransport(
            new Transport({apiKey})
        )
        console.log(`🔋[API_KEY] Api_key connected successfully`)
    } catch (error) {
        console.log(error);
        process.exit(1);
    }

}

