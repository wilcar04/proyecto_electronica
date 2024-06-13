
// Firebase
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, child } from "firebase/database";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5BwuZn0cO8dhkuuvrZ38qnYp1sftF4Iw",
  authDomain: "finalelectronica-bc4bf.firebaseapp.com",
  databaseURL: "https://finalelectronica-bc4bf-default-rtdb.firebaseio.com",
  projectId: "finalelectronica-bc4bf",
  storageBucket: "finalelectronica-bc4bf.appspot.com",
  messagingSenderId: "239699286226",
  appId: "1:239699286226:web:5fa28d0f0afae752b3350b",
  measurementId: "G-1V29XFYL64"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// function FetchStudents() {
//   useEffect(() => {
//     const dbRef = ref(database);
    
//     get(child(dbRef, 'Alumnos')).then((snapshot) => {
//       if (snapshot.exists()) {
//         console.log(snapshot.val());
//       } else {
//         console.log("No data available");
//       }
//     }).catch((error) => {
//       console.error(error);
//     });
//   }, []);

//   return null; // No need to render anything
// }

async function FetchStudents() {
      const dbRef = ref(database);

      try {
        const response = await get(child(dbRef, 'Alumnos'))
        return response.data

      } catch(error) {
        console.error(error);
        return []
      }
      
  }

async function FetchAssistance() {
    const dbRef = ref(database);

    try {
      const response = await get(child(dbRef, 'Asistencias'))
      return response.data

    } catch(error) {
      console.error(error);
      return []
    }
}

// function FetchAssistance() {
//     useEffect(() => {
//       const dbRef = ref(database);
      
//       get(child(dbRef, 'Asistencias')).then((snapshot) => {
//         if (snapshot.exists()) {
//           console.log(snapshot.val());
//         } else {
//           console.log("No data available");
//         }
//       }).catch((error) => {
//         console.error(error);
//       });
//     }, []);
  
//     return null; // No need to render anything
//   }