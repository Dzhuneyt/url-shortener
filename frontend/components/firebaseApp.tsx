// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBwXW3FkcXRjCRPkQWbFmN2x2UAKox6sqQ',
  authDomain: 'url-shortener-bc4f7.firebaseapp.com',
  projectId: 'url-shortener-bc4f7',
  storageBucket: 'url-shortener-bc4f7.appspot.com',
  messagingSenderId: '5768685576',
  appId: '1:5768685576:web:6d0a6a3c55e3c211d1c9bd',
}

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig)
