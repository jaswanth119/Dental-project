import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'surakshadentalhosp@gmail.com',
    // Use an app-specific password from Google Account settings
    pass: process.env.GMAIL_APP_PASSWORD
  }
});

export interface EmailData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  service: string;
  message?: string;
  appointmentId: string;
}

export const sendAppointmentEmail = async (data: EmailData) => {
  const mailOptions = {
    from: 'surakshadentalhosp@gmail.com',
    to: 'surakshadentalhosp@gmail.com',
    subject: `New Appointment Request from ${data.name}`,
    html: `
      <h2>New Appointment Request</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      <p><strong>Date:</strong> ${data.date}</p>
      <p><strong>Time:</strong> ${data.time}</p>
      <p><strong>Service:</strong> ${data.service}</p>
      ${data.message ? `<p><strong>Additional Message:</strong> ${data.message}</p>` : ''}
      <p><strong>Appointment ID:</strong> ${data.appointmentId}</p>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error: 'Failed to send email notification' };
  }
};
