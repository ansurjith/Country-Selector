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


