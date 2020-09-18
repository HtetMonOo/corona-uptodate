import React, { useState, useEffect } from 'react';
import './App.css';
import DataChart from './components/DataChart';
import Axios from 'axios';
import Navbar from './components/Navbar';
import { getGlobal, getLatest } from './.utils';
import { formatData, changeArr } from './funcAndStyles/func';
import CompareCountry from './components/CompareCountry';
import Loader from './components/Loader';

function App() {

  const [ globalData, setGlobalData ] = useState();
  const [ latest, setLatest ] = useState();
  const [ pending, setPending ] = useState(false);
  
  const fetchData = async() => {
    setPending(true);
    try{
      const res = await Axios.get(getGlobal());
      const allData = formatData(res.data.data);
      console.log("infetchdata")
      setGlobalData(allData);
      setPending(false);
    }catch {
      setGlobalData([]);
      setPending(false);    
    } 
  }

  const fetchCountryLatest = async() => {
    try {
      const response = await Axios.get(getLatest());
      console.log("incountryfetch")
      setLatest(changeArr(response.data.data.regions));  
    } catch {
      setLatest([]);
    }
  }

  const buildCountryList = (raw) => {
    const countryList = raw.map( r => r.name )
    countryList.unshift('Global');
    return countryList;
  }
  
  useEffect(() => {
    fetchData();
    fetchCountryLatest();
  },[]);
  
  return (
    <div className="App">
      { pending ? <Loader /> :  
        <div>
        { globalData && <Navbar latest={globalData[0]}/> }
        { globalData && latest && <DataChart globalData={globalData} countries={buildCountryList(latest)}/> }
        { latest && <CompareCountry latest={latest.slice(0,5)}/> }
        </div>
      }
    </div>
  );
}

export default App;
