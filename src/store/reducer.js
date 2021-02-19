const initialState = {
    result:null
}

const reducer = (state = initialState, action) =>{
    if('COUNTRYLIST' === action.type ){
        return {
            result:action.data
        }
    }
    return state
}

export default reducer