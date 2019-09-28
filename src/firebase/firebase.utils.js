import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyCYzAMasUnSPyaEjf7G9nelytnBr9VgQm4",
    authDomain: "crwn-db-9ece6.firebaseapp.com",
    databaseURL: "https://crwn-db-9ece6.firebaseio.com",
    projectId: "crwn-db-9ece6",
    storageBucket: "",
    messagingSenderId: "1008648644360",
    appId: "1:1008648644360:web:31391c8a480607c91deebd"
  };

  export const createUserProfileDocument = async ( userAuth, additionalData) => {
    if (!userAuth) return;
    
    const userRef = firestore.doc(`users/${ userAuth.uid }`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set( {
          displayName, email, createdAt, ...additionalData
        })
      } catch(error) {
          console.log("Error creating User data!", error.message);
      }
    }

    return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();


  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;

