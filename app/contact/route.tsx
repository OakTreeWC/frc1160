const nodemailer = require('nodemailer');
 
// Create a transporter object using SendLayer's SMTP server
const transporter = nodemailer.createTransport({
   host: 'smtp.gmail.com',
   port: 465,
   secure: true, // true for 465, false for other ports
   auth: {
     user: 'oaktree0511@gmail.com',
     pass: 'syxbyh-Nybhe1-zejqib' }
});
 
// Configure email options
const mailOptions = {
    from: 'oaktree0511@gmail.com', // Sender address
    to: 'william@wchen.dev', // Recipient address
    subject: 'Test Email from JavaScript', // Subject line
    text: 'This is a plain text email sent from JavaScript using Nodemailer.' // Plain text body
};
 


export async function POST(request: Request) {
    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
               return ('Error sending email:', error);
          } else {
               return ('Email sent:', info.response);
          }
       }
    );
}