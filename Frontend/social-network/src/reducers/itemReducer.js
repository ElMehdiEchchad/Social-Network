<<<<<<< HEAD
import {GET_USERS, ADD_USER, UPDATE_USER , ITEMS_LOADING, GET_POSTS, ADD_POST} from '../actions/types'

const initialState = {
    users : [ {
      } ],
=======
import {GET_USER, ADD_USER, UPDATE_USER , GET_FREINDS , GET_ALLUSERS , ITEMS_LOADING} from '../actions/types'

const initialState = {
    users : [ {
      } ] ,
      friends :[{}]
>>>>>>> bc955904ab02bb13600314a8137a14356839980b
}

export default function(state=initialState ,action){
    switch(action.type){
        case GET_USER : return {
            ...state,
            users : [action.payload, ...state.users]
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
        case ITEMS_LOADING : 
            return {
             ...state,
             loading : true
                        }
        default: return state;
    }
}
