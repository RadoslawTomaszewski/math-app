// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyCFfVeiXNytMigVUsOSFEFr2tGiHwpl85o",
    authDomain: "majza-eu.firebaseapp.com",
    projectId: "majza-eu",
    storageBucket: "majza-eu.appspot.com",
    messagingSenderId: "421207137360",
    appId: "1:421207137360:web:ab996a88f54e488af4c555",
    measurementId: "G-G00P7W5420"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
// const analytics = getAnalytics(app);