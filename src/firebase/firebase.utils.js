import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDflATbERoAK2QJIUOEEtt-8fzjt5ODSgo",
    authDomain: "crwn-db-280a5.firebaseapp.com",
    projectId: "crwn-db-280a5",
    storageBucket: "crwn-db-280a5.appspot.com",
    messagingSenderId: "410735117825",
    appId: "1:410735117825:web:249878a4915260eb602200",
    measurementId: "G-N9TKDDRW53"
  };

  firebase.initializeApp(config);

  export const createUserProfileDocument = async (userAuth, additionalData) => {
      if (!userAuth) return;

      const userRef = firestore.doc(`users/${userAuth.uid}`);

      const collectionRef = firestore.collection('users');
      const collectionSnapshot = await collectionRef.get();

      console.log({ collectionSnapshot })
      const snapShot = await userRef.get();

      if(!snapShot.exists) {
          const { displayName, email } = userAuth;
          const createdAt = new Date();

          try {
              await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
              })
          } catch (error) {
              console.log("error creating user", error.message)
          }
      }
      return userRef;
  };

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    
    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
    });

    return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc => {
        const { title, items } = doc.data();

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id, 
            title,
            items,
        }
    });

    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    } , {});
}



export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_Account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;


