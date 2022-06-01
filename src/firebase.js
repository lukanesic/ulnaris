// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from '@firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB09pyurCivDkTgdIFUaAVp4ICU7xpECGg',
  authDomain: 'ulnarisum.firebaseapp.com',
  projectId: 'ulnarisum',
  storageBucket: 'ulnarisum.appspot.com',
  messagingSenderId: '620111726722',
  appId: '1:620111726722:web:239eeb0aeb8f1263f70c9b',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth(app)
