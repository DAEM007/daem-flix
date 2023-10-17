import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD47DSs4j3npUay5Drtr2pMT-VrjjEgHac",
    authDomain: "netflix-clone-9222d.firebaseapp.com",
    projectId: "netflix-clone-9222d",
    storageBucket: "netflix-clone-9222d.appspot.com",
    messagingSenderId: "482266770370",
    appId: "1:482266770370:web:2ce1b79db153f52b51c45b"
};

// initialize firebase app...
const firebaseApp = initializeApp(firebaseConfig);

// initialize database service in firestore...
const db = getFirestore(firebaseApp);

// initialize authentication service...
const auth = getAuth(firebaseApp);

export { auth };
export default db;