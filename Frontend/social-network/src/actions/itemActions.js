
import axios from 'axios';
import {GET_USERS, ADD_USER, UPDATE_USER , ITEMS_LOADING} from '../actions/types'

export const getUsers = () => async dispatch => {
    
    try{
        const res = await axios.get('http://localhost:5000/api/user/608b5f75364b4861c006aa72')
        dispatch( {
            type: GET_USERS,
            payload: res.data
        })
    }
    catch(e){
        dispatch( {
            payload: console.log(e),
        })
    }

}

/*export const updateUser = id => dispatch => {
	axios
	.delete(`/api/items/${id}`)
	.then(res=>{
	   dispatch({
 		type: DELETE_ITEM,
		payload : id
	   })
	})
}; */

export const addUser = item => dispatch =>{
	axios
    .post('http://localhost:5000/api/register',item)
	.then(res=>{
	   dispatch({
 		type: UPDATE_USER,
		payload : res.data
	   })
	})
};

export const setItemsLoading = () => {
	return{
		type: ITEMS_LOADING
	};

};