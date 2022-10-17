import React, { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import logo from "./logo.svg";
import "./App.css";
import particlesOptions from "./particles.json";
//import ParticleEffectButton from 'react-particle-effect-button'
import {
    AwesomeButtonProgress,
  } from 'react-awesome-button';
  import 'react-awesome-button/dist/themes/theme-blue.css';
  import { BoxLoading } from 'react-loadingg';
import axios from 'axios'


function App() {
  const particlesInit = useCallback((main) => {
    loadFull(main);
  }, []);


  const getdata = async (e)=>{
    e.preventDefault();
    await axios.get('http://127.0.0.1:5000/api/get_data').then((res)=>{
      console.log(res.data);
    })
  }

  return (
    <div className="App">
      <Particles options={particlesOptions} init={particlesInit} />
      
      <header className="App-header">
      <button onClick={getdata}>Get Data</button>
      <AwesomeButtonProgress type="secondary" size="medium"  > Primary </AwesomeButtonProgress>

        
      </header>

    </div>
  );
}

export default App;
