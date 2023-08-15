import nodemailer from "nodemailer";


const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;


export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass,
  },
});

export const mailOptions = {
  from: email, // Sender mail
  // to: email, // In this case receiver and sender will be same
  to: "chaudharypc2604@gmail.com", // Reciver mail
};
