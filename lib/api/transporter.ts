import { createTransport } from "nodemailer";

export default createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT ?? '465', 10),
  secure: true,
  auth: {
    user: process.env.EMAIL_FROM,
    pass: process.env.SMTP_PASS,
  },
});