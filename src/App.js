//import logo from './logo.svg';
import React,{ useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import  Alert  from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {
  const [mode,setMode] =useState('light');
  const [alert,setAlert]=useState(null);
  
  const showAlert =(message,type)=>{
    setAlert({
      msg:message,
      type: type
    })
    setTimeout(()=>
    {
      setAlert(null);
    },1500);
  }
const toggleMode = ()=>{
  if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor='#011f4a';
    showAlert("Dark mode has been enabled","success");
    document.title='TextUtils - Dark Mode'
  }
  else{
    setMode('light');
    document.body.style.backgroundColor='white';
    showAlert("Light mode has been enabled","success");
    document.title='TextUtils - Light Mode'

  }
}
  return (
    <>
    <Router>

  <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
  <Alert alert={alert}/>
  <div className='container'>
  <Switch>
        <Route path="/" exact key="home">
        <Textform showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>
        </Route>
        <Route path="/About" exact key="about">
        <About />
        </Route>
      </Switch>

  {/* <About/>*/}
  </div>
  </Router>
    </>
  );
}

export default App;
