import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC-4_eQaPs1GHetaBHZjGgXWaTpFpRxMhg",
  authDomain: "crwn-clothing-db-66aff.firebaseapp.com",
  projectId: "crwn-clothing-db-66aff",
  storageBucket: "crwn-clothing-db-66aff.appspot.com",
  messagingSenderId: "846764662019",
  appId: "1:846764662019:web:ef86d3e511adfe8e471d36"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid)
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      })
    } catch(error) {
      console.log('error creating a user', error.message)
    }
  }
  return userDocRef;
}