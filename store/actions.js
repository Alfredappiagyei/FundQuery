// import { getFirestore } from "redux-firestore"

// export const addUser = (user) => {
//     return(dispatch, state, {getFirestore}) => {
//         getFirestore()
//         .collection('campaigns')
//         .add({...user, timestamp:  getFirestore().FieldValue.serverTimestamp()})
//         .then((doc) => {        
//         }); 
        
//     };  
// }

// export const deleteUser = (user_id) => {
//     return(dispatch ,state, {getFirestore}) =>{
//         getFirestore()
//         .collection('campaigns')
//         .doc(user_id).delete()
//     }
          
// }

// export const editUser = (user_id, updated_info) => {
//     return (dispatch, state, {getFirestore})=>{
//         getFirestore()
//         .collection('campaigns')
//         .doc(user_id).set(updated_info)
//         .then(()=>{

//         }).catch((err)=>{

//         })
//     }
// }





// export const getAllUsers = () =>{
//     return(dispatch,state, {getAllUsers})=>{
//         getFirestore()
//         .collection('campaigns')
//         .orderBy('timestamp', 'desc')
//         .onSnapshot((snapshot)=>{
//              let users = [];
//              snapshot.forEach((doc)=>{
//                users.push({...doc.data(),id: doc.id});
//              });
//              dispatch({
//                  type:"SET_ALL_USERS",
//                  payload:users
//              })
//         },
//         (err)=>{}
//         )
//     }

// }