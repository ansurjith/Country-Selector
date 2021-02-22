const initialState = {
    result:null,
    selectedCountry:[]
}

const reducer = (state = initialState, action) =>{
    if('COUNTRYLIST' === action.type ){
        return {
            ...state,
            result:action.data
        }
    }else if('SELECTOR' === action.type){
       return{
           ...state,
           selectedCountry:[...action.data]
       }
    }
    return state
}

export default reducer