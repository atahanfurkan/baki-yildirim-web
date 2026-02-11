import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAKb58yQeXHCYZN_8JmCmggVodGLhgceKA",
  authDomain: "baki-yildirim.firebaseapp.com",
  projectId: "baki-yildirim",
  storageBucket: "baki-yildirim.firebasestorage.app",
  messagingSenderId: "101324744628",
  appId: "1:101324744628:web:6a70fcdcbd8008f4f634e1",
  measurementId: "G-10SS18K0BW"
};

const app = initializeApp(firebaseConfig);
export const veritabani = getFirestore(app);
export const depo = getStorage(app);