import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getAnalytics, isSupported, Analytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyAA2eLsECcuQsGWkcgfOJqUEGv2WeEagXM",
  authDomain: "dental-42609.firebaseapp.com",
  projectId: "dental-42609",
  storageBucket: "dental-42609.firebasestorage.app",
  messagingSenderId: "553867421334",
  appId: "1:553867421334:web:622c431b64f2f86da144b7",
  measurementId: "G-SKD6HVQHW6"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

// Initialize Analytics conditionally (only in browser)
let analytics: Analytics | null = null;
if (typeof window !== 'undefined') {
  isSupported().then(yes => yes && (analytics = getAnalytics(app)));
}

export { app, db, auth, storage, analytics };
