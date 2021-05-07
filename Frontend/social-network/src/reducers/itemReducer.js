import {GET_USERS, ADD_USER, UPDATE_USER , ITEMS_LOADING, GET_POSTS, ADD_POST} from '../actions/types'

const initialState = {
    users : [ {
      } ],
}

export default function(state=initialState ,action){
    switch(action.type){
        case GET_USERS : return {
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
        case ITEMS_LOADING : 
            return {
             ...state,
             loading : true
                        }
        default: return state;
    }
}
