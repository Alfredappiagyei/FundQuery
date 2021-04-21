
const initialState = {
    login:false,
    user:null,
  }
  
  
  
  
  export default (state= initialState, action) =>{
      switch(action.type){
          case 'LOGGED_IN':
              return {...state, login:true, user:action.payload}
              case 'LOGGED_OUT':
                  return {...state, login:false, user:null}
              
          default:
              return state;
      }
  }