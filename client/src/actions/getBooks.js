import axios from 'axios';
const URL="https://cscomsats.herokuapp.com/books"
//const URL="http://localhost:6000/books"
export const getBooks = () =>{
   
    return async (dispatch) =>{
        // let data =await fetch(URL,'GET')
        // console.log(data)
        const response = await axios.get(URL);
        //console.log(response.data)
        dispatch({
            type:"GET BOOKS",
            payload:response.data
        })
    }
} 




