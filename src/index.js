import {initializeApp} from 'firebase/app';
import{
  getFirestore,collection,getDocs,onSnapshot,
  addDoc,deleteDoc,doc,
  query,where,getDoc,updateDoc

} from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyDJGSoSPJg8hfViuS2h-FghhtOwC53C7PI",
    authDomain: "personaldetails-264d3.firebaseapp.com",
    projectId: "personaldetails-264d3",
    storageBucket: "personaldetails-264d3.appspot.com",
    messagingSenderId: "312093042919",
    appId: "1:312093042919:web:9409db224e8f8b52d99a42"
  };
initializeApp(firebaseConfig); // init firebase app

const db = getFirestore(); // init service

const colRef = collection(db,"details");  //collection reference

const q = query(colRef,where("name" , "==","achu"));

// getDocs(colRef)   // get collection data
//   .then((a)=>{
//     // console.log(a.docs);
//     let detail = [];
//     a.docs.forEach((det)=>{
//       detail.push({...det.data(), id : det.id})
//     })
//     console.log(detail)
//   })
//   .catch((err)=>{
//     console.log(err.message);
//   })

onSnapshot(colRef,(snap)=>{   // get real time collection data
  let detail = [];
      snap.docs.forEach((det)=>{
        detail.push({...det.data(), id : det.id})
      })
      console.log(detail)
})  

onSnapshot(q,(snap)=>{   // get real time collection data
  let detail = [];
      snap.docs.forEach((det)=>{
        detail.push({...det.data(), id : det.id})
      })
      console.log(detail)
})


  // add a detail
const addDetail = document.querySelector('.add');
addDetail.addEventListener('submit',(e)=>{
  e.preventDefault();
  addDoc(colRef,{
    name:addDetail.name.value,
    age:addDetail.age.value,
    mobile:addDetail.mobile.value
  })
    .then(()=>{
      addDetail.reset();
    })

})
 // delete a detail
const deleteDetail = document.querySelector('.delete')
deleteDetail.addEventListener('submit',(e)=>{
  e.preventDefault();
  const dbref = doc(db,'details',deleteDetail.id.value)
  deleteDoc(dbref)
    .then(()=>{
        deleteDetail.reset();
    })

})

const docRef = doc(db,'details',"w6WrkN88Qoyae11ww6lU")
getDoc(docRef)
  .then((doc)=>{
    console.log(doc.data(),doc.id);
  })
onSnapshot(docRef,(doc)=>{
  console.log(doc.data(),doc.id);
})  

// update a detail
const updateDetail = document.querySelector('.update')
updateDetail.addEventListener('submit',(e)=>{
  e.preventDefault();
  const dbref = doc(db,'details',updateDetail.id.value)
 updateDoc(dbref,{
  name:"mcn"

 })
  .then(()=>{
    updateDetail.reset();
  })

})