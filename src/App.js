import React from 'react';
import Navbar from './container/Navbar';
import Content from './container/Content';
import Provinsi from './container/Provinsi';
import Footer from './container/Footer';
import Hotline from './container/Hotline';
import './App.css';

import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';

export default function App ()  {
  return(
    <div>
    <Router>
      <Switch>
        <Route exact path="/"><Home/></Route>
        <Route path="/provinsi"><Prov/></Route>
        <Route path="/hotline"><Hot/></Route>
        <Route path="/contact"><Contact/></Route>
      </Switch>
    </Router>
    </div>
  )
}
const Home = () => {
  return(
    <div>
      <Navbar/>
      <Content/>
      <Footer/>
    </div>
  )
}
const Prov = () => {
  return(
    <div>
      <Navbar/>
      <Provinsi/>
      <Footer/>
    </div>
  )
}
const Hot = () => {
  return(
    <div>
      <Navbar/>
      <Hotline/>
      <Footer/>
    </div>
  )
}
const Contact = () => {
  return(
    <div>
      <Navbar/>
      <Footer/>
    </div>
  )
}