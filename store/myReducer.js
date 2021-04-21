import {v4 as uuid} from "uuid";


const initialState = {
  users: [ ],
  login:false,
  user:null,
  
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
      case "ADD_USER":
          const newUser = {
              id: uuid(),
              title: action.payload.title,
              category: action.payload.category,
              goal: action.payload.goal,
              location: action.payload.location,
              about: action.payload.about
          };
          return { ...state, users: [...state.users, newUser] };
          case 'LOGGED_IN':
            return {...state, login:true, user:action.payload};
            case 'LOGGED_OUT':
                return {...state, login:false, user:null};
          case "DELETE_USER":
              const filteredUsers = state.users.filter(user => user.id !== action.payload);
              return  {...state, users: filteredUsers}

              case "EDIT_USER":
              const editedUsers = state.users.map(user => {
                if (user.id === action.user_id) {
                  return{...user, ...action.updated_info}
                }             
                else{
                  return user;
                }
              });
              return{...state, users: editedUsers}
              
              case "SET_ALL_USERS":
                  return {users: action.payload};
        default:
            return state;
    }
}

export default usersReducer;