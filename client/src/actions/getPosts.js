import axios from 'axios';
const URL="https://cscomsats.herokuapp.com/"
//console.log(URL)
export const getPosts = () =>{
    
    return async (dispatch) =>{
       const response = await axios.get(URL);
        //console.log(response.data)
        dispatch({
            type:"GET POSTS",
            payload:response.data
        })
    }
} 




