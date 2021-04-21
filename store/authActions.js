import firebase from '../firebase/firebase';

export function registerWithEmail (email,password) {
    return async (dispatch)=>{
       try {
          const user = await
          firebase.auth()
          .createUserWithEmailAndPassword(email, password)
          dispatch(loggedIn(user))
       }catch(error) {
            dispatch(registerError(error.message))
       }
    }
}

 
export function loginWithEmail (email,password) {
    return async (dispatch)=>{
        try {
            const user = await
            firebase.auth()
            .signInWithEmailAndPassword(email, password)
            dispatch(loggedIn(user))
         }catch(error) {
            dispatch( loginError(error.message))
         }
    }
}


 

export function logoutUser  () {
    return async (dispatch)=>{
        try {
           await firebase.auth().signOut()
           dispatch(loggedOut())
         }catch(error) {
            console.log(error)
         }
    }
}


function loggedIn(user){
    return{
        type:'LOGGED_IN',
        payload:user
    }
}


function loggedOut(){
    return{
        type:'LOGGED_OUT'
    }
}
 

export function loginError(error){
    return{
        type:'LOGIN_ERROR',
        payload:error
    }
}

export function registerError(error){
    return{
        type:'LOGIN_ERROR',
        payload:error
    }
}