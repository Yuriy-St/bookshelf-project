// initial firebase
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAA8jYNKkxR3HcK5Tf_qvCbW3uqAVzZXEY',
  authDomain: 'bookshelf-24937.firebaseapp.com',
  projectId: 'bookshelf-24937',
  storageBucket: 'bookshelf-24937.appspot.com',
  messagingSenderId: '302463622298',
  appId: '1:302463622298:web:d325247a433ddd90885323',
  measurementId: 'G-TR194SD0XD',
  databaseURL:
    'https://bookshelf-24937-default-rtdb.europe-west1.firebasedatabase.app/',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
