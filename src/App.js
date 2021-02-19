import {useEffect, useState} from 'react'

import './App.css';
import { connect } from 'react-redux'
import { countryFetcher } from './store/actions'
import {CheckBox} from './components/checkbox'


function App(props) {
  const [showList, setShowList] = useState([])

  useEffect(()=>{
    props.getCountryList()
  },[])

  const showListMaker = (e) => {
    if(e.target.checked){
      setShowList([...showList,e.target.name])
    }else{
      let tempArray = [...showList]
      let index = tempArray.findIndex((data)=> data === e.target.name)
      tempArray.splice(index,1)
      setShowList([...tempArray])
    }
  }

  return (
    <div className="App">
      <h3>Country Selector</h3>
      <div className="country-list">
        {
          props.countryList?props.countryList.allContinentHierarchy.map((data)=> <CheckBox show={showListMaker} countries={data.children}/>):'Loading...'
        }
      </div>
      <div className="selected-country">
        {
          showList.map((data)=>{
            return(
              <span>{data}</span>
          )})
        }
      </div>
    </div>
  );
}   

const mapDispatchToProps = (dispatch) =>{
  return {
    getCountryList : () => dispatch(countryFetcher())
  }
}

const mapStateToProps = (state) =>{
  return {
    countryList:state.result
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
