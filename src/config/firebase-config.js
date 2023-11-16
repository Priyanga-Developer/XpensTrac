import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider} from "firebase/auth"
import { getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAwgNucJJhXrZoHrRNNWja2JCGbZl0UaAQ",
  authDomain: "xpenstrac.firebaseapp.com",
  projectId: "xpenstrac",
  storageBucket: "xpenstrac.appspot.com",
  messagingSenderId: "529653202791",
  appId: "1:529653202791:web:82534fcae1c5b9349ef9c2",
  measurementId: "G-CHB79J19MG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const provider= new GoogleAuthProvider(app);
export const db =getFirestore(app);
