import {GET_USER, ADD_USER, UPDATE_USER , GET_FREINDS , GET_ALLUSERS , ITEMS_LOADING , ADD_FRIEND , REMOVE_FRIEND} from '../actions/types'

const initialState = {
    users : [{}] ,
    friends :[{}] ,
    user :[{}]
}

export default function(state=initialState ,action){
    switch(action.type){
        case GET_USER : return {
            ...state,
            user : [action.payload, ...state.user]
        }
        case ADD_USER:
            return{
            ...state,
            users : [action.payload, ...state.users]
            }

         case UPDATE_USER :
             return{
             ...state,
            users: [action.payload, ...state.users]
                        }
         case GET_FREINDS :
             return{
            ...state,
            friends: [action.payload, ...state.friends]
                                       }
         case GET_ALLUSERS :
            return{
             ...state,
            users: [action.payload, ...state.users]
                                                 }  
         case ADD_FRIEND :
              return{
              ...state,
              friends: [action.payload, ...state.friends]
                                                  }    
         case REMOVE_FRIEND :
              return{
              ...state,
             users: [action.payload, ...state.users]
                                                                                         }                          
        case ITEMS_LOADING : 
            return {
             ...state,
             loading : true
                        }
        default: return state;
    }
}
