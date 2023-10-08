import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyClenQypgGF0CQSD4DgAoVldBHHvGys6js",
  authDomain: "twilight-music-streaming.firebaseapp.com",
  projectId: "twilight-music-streaming",
  storageBucket: "twilight-music-streaming.appspot.com",
  messagingSenderId: "462785926074",
  appId: "1:462785926074:web:25c4a2e9e1c1619cc00383",
  measurementId: "G-V47KG2K7T6"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
