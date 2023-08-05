import { initializeApp , FirebaseApp, getApp} from "firebase/app";

const firebaseConfig = JSON.parse(process.env.NEXT_PUBLIC_FIREBASE_CONFIG as string)

let clientApp: FirebaseApp;

try {
  clientApp = getApp('clientApp');
} catch (error) {
  // 'clientApp' doesn't exist, so initialize it
  clientApp = initializeApp(firebaseConfig, 'clientApp');
}

export { clientApp };