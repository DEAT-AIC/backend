import admin from 'firebase-admin';

const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT as string)

let adminApp: admin.app.App;

try {
  adminApp = admin.app('adminApp');
} catch (error) {
  // 'adminApp' doesn't exist, so initialize it
  adminApp = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  }, 'adminApp');
}

export { adminApp };