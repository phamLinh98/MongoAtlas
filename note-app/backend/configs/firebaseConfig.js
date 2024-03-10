import admin from 'firebase-admin';

import serviceAccount from '../service-account-file.json' assert { type: 'json' };

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
