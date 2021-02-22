import {useEffect} from 'react'
import './App.css';
import { connect } from 'react-redux'
import * as actionCreators from './store/actions'
import {CheckBox} from './components/checkbox'


function App(props) {

  useEffect(()=>{
    props.countryFetcher()
  },[])

  return (
    <div className="App">
      <h3>Country Selector</h3>
      <div className="country-list">
        {
          props.countryList?props.countryList.allContinentHierarchy.map((data)=> <CheckBox show={props.countrySelector} countries={data.children}/>):'Loading...'
        }
      </div>
      <div className="selected-country">
        {
          props.selected.map((data)=>{
            return(
              <span>{data}</span>
          )})
        }
      </div>
    </div>
  );
}   

const mapStateToProps = (state) =>{
  return {
    countryList:state.result,
    selected:state.selectedCountry
  }
}

export default connect(mapStateToProps, actionCreators)(App);
