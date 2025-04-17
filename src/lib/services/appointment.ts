import { db } from '../firebase';
import { collection, addDoc, query, where, getDocs, Timestamp } from 'firebase/firestore';
import { trackEvent, Events } from '../analytics';

export interface AppointmentData {
  name: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  service: string;
  message: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  createdAt: Date;
}

export async function createAppointment(data: Omit<AppointmentData, 'status' | 'createdAt'>) {
  try {
    // Check for existing appointments at the same time
    const appointmentsRef = collection(db, 'appointments');
    const existingAppointments = query(
      appointmentsRef,
      where('date', '==', data.date),
      where('time', '==', data.time)
    );
    
    const querySnapshot = await getDocs(existingAppointments);
    if (!querySnapshot.empty) {
      const error = 'This time slot is already booked. Please choose another time.';
      trackEvent(Events.APPOINTMENT_FAILED, { error });
      throw new Error(error);
    }

    // Create new appointment
    const appointment = await addDoc(appointmentsRef, {
      ...data,
      status: 'pending',
      createdAt: Timestamp.now(),
    });

    // Track successful booking
    trackEvent(Events.APPOINTMENT_BOOKED, {
      service: data.service,
      date: data.date,
      time: data.time,
    });

    return {
      id: appointment.id,
      success: true,
      message: 'Appointment booked successfully!',
    };
  } catch (error) {
    console.error('Error booking appointment:', error);
    trackEvent(Events.APPOINTMENT_FAILED, {
      error: error instanceof Error ? error.message : 'Unknown error',
    });
    throw error;
  }
}

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
