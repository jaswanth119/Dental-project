import { db } from '../firebase';
import { collection, addDoc, query, where, getDocs, Timestamp } from 'firebase/firestore';
import { trackEvent, Events } from '../analytics';
import emailjs from '@emailjs/browser';

// Initialize EmailJS
emailjs.init("UFCE6sqWaV_6OrLas");

export interface AppointmentData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  service: string;
  message?: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  createdAt: Date;
}

export const createAppointment = async (data: AppointmentData) => {
  try {
    // Check for existing appointments
    const existingAppointments = await getDocs(
      query(
        collection(db, 'appointments'),
        where('date', '==', data.date),
        where('time', '==', data.time),
        where('status', '==', 'confirmed')
      )
    );

    if (!existingAppointments.empty) {
      return { success: false, error: 'This time slot is already booked' };
    }

    // Save to Firestore
    const appointment = await addDoc(collection(db, 'appointments'), {
      ...data,
      status: 'pending',
      createdAt: Timestamp.now(),
    });

    // Send email notification
    await emailjs.send(
      "service_cxn88bd",
      "template_78oscdx",
      {
        name: data.name,
        email: data.email,
        phone: data.phone,
        date: data.date,
        time: data.time,
        service: data.service,
        message: data.message || 'No additional message'
      }
    );

    // Track successful booking
    trackEvent(Events.APPOINTMENT_BOOKED, {
      service: data.service,
      appointmentId: appointment.id
    });

    return { success: true, id: appointment.id };
  } catch (error) {
    console.error('Error creating appointment:', error);
    return { success: false, error: 'Failed to create appointment' };
  }
};

export async function checkAvailability(date: string, time: string) {
  try {
    const appointmentsRef = collection(db, 'appointments');
    const existingAppointments = query(
      appointmentsRef,
      where('date', '==', date),
      where('time', '==', time)
    );
    
    const querySnapshot = await getDocs(existingAppointments);
    return querySnapshot.empty;
  } catch (error) {
    console.error('Error checking availability:', error);
    throw error;
  }
}
