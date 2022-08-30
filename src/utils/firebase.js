import { initializeApp } from 'firebase/app';
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  setDoc,
  where,
  writeBatch,
} from 'firebase/firestore';
import { makeid } from './functions';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD9sFvPyjwVuYld-eXtHAijdlexIL5EM2g',
  authDomain: 'wedding-invite-de20c.firebaseapp.com',
  projectId: 'wedding-invite-de20c',
  storageBucket: 'wedding-invite-de20c.appspot.com',
  messagingSenderId: '1058182536800',
  appId: '1:1058182536800:web:36b4e8016f81b10b7f2d05',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();

export const addCollection = async (messagesKey, objToAdd) => {
  try {
    const collectionRef = collection(db, messagesKey);
    const batch = writeBatch(db);

    const docRef = doc(collectionRef, makeid(10));

    objToAdd.forEach((obj) => {
      batch.set(docRef, obj);
    });
    await batch.commit();
    return await 'sukses';
  } catch (err) {
    console.log(err);
  }
};

export const getCollections = async (messagesKey) => {
  const q = query(collection(db, messagesKey));
  const collections = await getDocs(q);
  return collections;
};

export const getReply = async (id) => {
  const q = query(collection(db, 'replies'), where('id_message', '==', id));
  const collections = await getDocs(q);
  return collections;
};
