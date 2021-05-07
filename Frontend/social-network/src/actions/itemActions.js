import axios from 'axios';
import {GET_USERS, ADD_USER, UPDATE_USER , ITEMS_LOADING} from '../actions/types'



export const getUsers = id => async dispatch => {
	dispatch(setItemsLoading());
    try{
        const res = await axios.get("http://localhost:5000/api/user/"+id, {withCredentials :true})
        dispatch( {
            type: GET_USERS,
            payload: res.data
        })
    }
    catch(e){
        dispatch( {
            payload: console.log("salma" + e),
        })
    }

}


export const updateUser  = user => async dispatch => {
    try{
        const res = await  axios.put('http://localhost:5000/api/user/608b5f75364b4861c006aa72',user , {withCredentials :true} )
        dispatch( {
            type: UPDATE_USER,
            payload: res.data
        })
    }
    catch(e){
        dispatch( {
            payload: console.log(e),
        })
    }

}

/*export const updateUser =  user  => dispatch =>{
	axios
    .put('http://localhost:5000/api/user/608b5f75364b4861c006aa72',user)
	.then(res=>{
	   dispatch({
 		type: UPDATE_USER,
		payload : res.data
	   })
	})
};*/

export const setItemsLoading = () => {
	return{
		type: ITEMS_LOADING
	};

};
