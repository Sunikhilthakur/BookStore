import nodemailer from 'nodemailer';
import jwt from 'jsonwebtoken';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'thakursunikhil@gmail.com',
    pass: 'taso qmlq nfkb sfod'
  }
});

export const sendVerificationEmail = async (email, token) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Email Verification',
    html: `
      <h1>Verify Your Email</h1>
      <p>Click the link below to verify your email address:</p>
      <a href="${process.env.CLIENT_URL}/verify-email/${token}">Verify Email</a>
    `
  };

  await transporter.sendMail(mailOptions);
};