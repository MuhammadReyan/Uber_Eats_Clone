import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAS2siuEHNAfn6lZZt0R153SVv2-EgwhLk",
  authDomain: "uber-eats-85e79.firebaseapp.com",
  projectId: "uber-eats-85e79",
  storageBucket: "uber-eats-85e79.appspot.com",
  messagingSenderId: "837867909230",
  appId: "1:837867909230:web:16168eb01c0da7fee0b67f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;