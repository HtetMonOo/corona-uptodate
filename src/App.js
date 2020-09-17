import React, { useState, useEffect } from 'react';
import './App.css';
import DataChart from './components/DataChart';
import Axios from 'axios';
import Navbar from './components/Navbar';
import { getGlobal, getLatest } from './.utils';
import { formatData, changeArr } from './funcAndStyles/func';
import CompareCountry from './components/CompareCountry';

function App() {

  const [ globalData, setGlobalData ] = useState([]);
  const [ latest, setLatest ] = useState([]);
 
  
  const fetchData = async() => {
    try{
      const res = await Axios.get(getGlobal());
      const allData = formatData(res.data.data);
      setGlobalData(allData);
    }catch {
      setGlobalData([]);
    } 
  }

  const fetchCountryLatest = async() => {
    try {
      const response = await Axios.get(getLatest());
      setLatest(changeArr(response.data.data.regions));  
    } catch {
      setLatest([]);
    }
  }
  
  useEffect(() => {
    fetchData();
    fetchCountryLatest();
  },[]);
  
  return (
    <div className="App">
      { globalData.length !== 0 && <Navbar latest={globalData[0]}/> }
       { globalData.length !== 0  && <DataChart globalData={globalData}/> }
       { latest.length !== 0 && <CompareCountry latest={latest.slice(0,5)}/> }
    </div>
  );
}

export default App;
