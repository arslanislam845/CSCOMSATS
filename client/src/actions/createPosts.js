import axios from 'axios';
const URL="https://cscomsats.herokuapp.com/"
// const URL="http://localhost:6000/"

export const createPosts = (postData) =>{
   
    return async (dispatch) =>{
        const response = await axios.post(URL,postData);
        //console.log(response.data)
        dispatch({
            type:"CREATE POSTS",
            payload:response.data
        })
    }
} 
