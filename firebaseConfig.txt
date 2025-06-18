import { initializeApp, getApps } from 'firebase/app';
import {
  getAuth,
  initializeAuth,
  getReactNativePersistence,
} from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBghQreE_Ah-4wQq_WOPqawOIBeCK2xoSY',
  authDomain: 'expense-tracker-4f508.firebaseapp.com',
  projectId: 'expense-tracker-4f508',
  storageBucket: 'expense-tracker-4f508.firebasestorage.app',
  messagingSenderId: '706739343076',
  appId: '1:706739343076:web:bb715f28d355cfaedf26f1',
};

// Initialize Firebase
let app;
if (getApps().length === 0) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0]; // if already initialized, use that one
}

// Initialize Firebase Auth for React Native with AsyncStorage persistence
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { app, auth };