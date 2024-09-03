import { initializeApp, getApps } from 'firebase/app';
import { initializeAuth, getReactNativePersistence, getAuth } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyBPwoWt-FJfdWlWDZm7EtBQ-_doXzpT92U",
  authDomain: "smartcourier-56e0f.firebaseapp.com",
  projectId: "smartcourier-56e0f",
  storageBucket: "smartcourier-56e0f.appspot.com",
  messagingSenderId: "14513938023",
  appId: "1:14513938023:web:b895e37dedd1a13422bec2",
  measurementId: "G-7B04BS2TCL"
};

let app;
let auth;

if (!getApps().length) {
  app = initializeApp(firebaseConfig);
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
  });
} else {
  app = getApps()[0]; // Use the already initialized app
  auth = getAuth(app);
}

export { app, auth };
