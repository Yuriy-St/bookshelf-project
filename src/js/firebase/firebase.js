// initial firebase
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCJSquTd3KGVDroMbZ8UoIjG6CkTYmgKX0',
  authDomain: 'bookshelf-1-39151.firebaseapp.com',
  projectId: 'bookshelf-1-39151',
  storageBucket: 'bookshelf-1-39151.appspot.com',
  messagingSenderId: '496121048758',
  appId: '1:496121048758:web:41479e18db0279b779c017',
  databaseURL: 'https://bookshelf-1-39151-default-rtdb.firebaseio.com/',
};

const app = initializeApp(firebaseConfig);
getFirestore(app);
