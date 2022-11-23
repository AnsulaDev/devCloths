import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,} from 'firebase/auth';

import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCq3Gkmkuto58rlZU41YuqZwQR7sLrlF84",
    authDomain: "dev-cloths-db.firebaseapp.com",
    projectId: "dev-cloths-db",
    storageBucket: "dev-cloths-db.appspot.com",
    messagingSenderId: "1098006438534",
    appId: "1:1098006438534:web:ceeb7e35c4a1a3e779e707"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider  = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    console.log(userDocRef);


    //to get user data 
    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());


    //we do this if there no user snapshot , then we create new user
    if(!userSnapshot.exists()){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        }catch(error){
            console.log('error creating the user', error.message);
        }
    }
    // but if the user  data  is exist then it will ignore above  conditions
    return userDocRef;
};