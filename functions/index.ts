import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as nodemailer from 'nodemailer';

admin.initializeApp();

// For local testing, use a test account
const useTestAccount = process.env.FUNCTIONS_EMULATOR === 'true';

const createTransport = async () => {
  if (useTestAccount) {
    // Create a test account for development
    const testAccount = await nodemailer.createTestAccount();
    return nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });
  }

  // Production transport
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'surakshadentalhosp@gmail.com',
      pass: process.env.GMAIL_APP_PASSWORD
    }
  });
};

export const onAppointmentCreated = functions.firestore
  .document('appointments/{appointmentId}')
  .onCreate(async (snap, context) => {
    const appointment = snap.data();
    const appointmentId = context.params.appointmentId;

    const transporter = await createTransport();

    const mailOptions = {
      from: 'surakshadentalhosp@gmail.com',
      to: 'surakshadentalhosp@gmail.com',
      subject: `New Appointment Request from ${appointment.name}`,
      html: `
        <h2>New Appointment Request</h2>
        <p><strong>Name:</strong> ${appointment.name}</p>
        <p><strong>Email:</strong> ${appointment.email}</p>
        <p><strong>Phone:</strong> ${appointment.phone}</p>
        <p><strong>Date:</strong> ${appointment.date}</p>
        <p><strong>Time:</strong> ${appointment.time}</p>
        <p><strong>Service:</strong> ${appointment.service}</p>
        ${appointment.message ? `<p><strong>Additional Message:</strong> ${appointment.message}</p>` : ''}
        <p><strong>Appointment ID:</strong> ${appointmentId}</p>
      `
    };

    try {
      const info = await transporter.sendMail(mailOptions);
      
      if (useTestAccount) {
        // Log the test email URL for development
        console.log('Preview URL: ' + nodemailer.getTestMessageUrl(info));
      }
      
      console.log('Email sent successfully');
    } catch (error) {
      console.error('Error sending email:', error);
    }
  });
