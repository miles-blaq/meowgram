import {
    CHANGE_SEARCH_FIELD,
    REQUEST_CATNAMES_PENDING,
    REQUEST_CATNAMES_SUCCESS,
    REQUEST_CATNAMES_FAILED
} from "./constants"

const initState = {
    searchField:"",
    isPending: false,
    cats:[],
    errMsg:""
}

export const searchCats = (state=initState,action={})=>{
    switch(action.type){
        case CHANGE_SEARCH_FIELD:
            return {...state, searchField: action.payload }
        default:
            return state;    
    }
}

export const getCats = (state=initState,action={})=>{
    switch(action.type){
        case REQUEST_CATNAMES_PENDING:
            return {...state,isPending:true}
        case REQUEST_CATNAMES_SUCCESS:
            return {...state,cats: action.payload,isPending:false}
        case REQUEST_CATNAMES_FAILED:
            return {...state,errMsg: action.payload, isPending:false}
        default:
            return state;
    }
}