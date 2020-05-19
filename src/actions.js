import {
    CHANGE_SEARCH_FIELD,
    REQUEST_CATNAMES_PENDING,
    REQUEST_CATNAMES_SUCCESS,
    REQUEST_CATNAMES_FAILED
} from "./constants"
import axios from "axios";

export const setSearchField = (text)=> ({
    type:CHANGE_SEARCH_FIELD,
    payload:text
})

export const requestCats = () => (dispatch)=>{
    dispatch({type:REQUEST_CATNAMES_PENDING})
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(response => dispatch({type:REQUEST_CATNAMES_SUCCESS, payload:response.data}))
    .catch(error => dispatch({type:REQUEST_CATNAMES_FAILED , payload:"Something went wrong"}))
}