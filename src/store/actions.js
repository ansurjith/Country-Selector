import axios from 'axios'

export const countryFetcher = () =>{
    return dispatch => {
        axios.get('https://www.tui.co.uk/searchpanel/availability/search?apiType=suggestions&siteID=th')
        .then((response)=>{
            dispatch({
                type:'COUNTRYLIST',
                data:response.data
            })
        }).catch((err)=>console.log(err))
    }
}


export const countrySelector = (data) =>{
    return (dispatch, getState) =>{
        let state = getState()
        if(data.target.checked){

            dispatch({
                type:'SELECTOR',
                data:[...state.selectedCountry,data.target.name]
            })
        }else{
          let tempArray = [...state.selectedCountry]
          let index = tempArray.findIndex((item)=> item === data.target.name)
          tempArray.splice(index,1)
          dispatch({
            type:'SELECTOR',
            data:tempArray
          }) 
        }
    }
}