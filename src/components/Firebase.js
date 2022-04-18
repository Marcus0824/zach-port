// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth } from 'firebase/auth';
import {getStorage, ref, uploadBytes } from 'firebase/storage';
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKBI3TvPhyFPCziFHBDrdrSmZ_4rrqtCA",
  authDomain: "zachportfolio-e2ce0.firebaseapp.com",
  projectId: "zachportfolio-e2ce0",
  storageBucket: "zachportfolio-e2ce0.appspot.com",
  messagingSenderId: "387271806950",
  appId: "1:387271806950:web:0392e7c75a9322aa465027",
  measurementId: "G-YP7F6RT46B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

const uploadImage = async (file) => {
    if (file.current)
    {
      const imageRef = ref(storage, "images/" + file.current.files[0].name);

      console.log(imageRef)
      if (file.current.files){
        uploadBytes(imageRef, file.current.files[0]).then((snapshot) => {
          console.log('Uploaded a blob or file!');
        });
      }
    }
}

  export {
      auth,
      db,
      uploadImage,
      storage
  }