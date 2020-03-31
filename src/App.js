import React from 'react';
import Navbar from './container/Navbar';
import Content from './container/Content';
import Provinsi from './container/Provinsi';
import Footer from './container/Footer';
import Hotlines from './container/Hotline';
import './App.css';

import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';

export default function App ()  {
  return(
    <>
    <Router>
      <Switch>
        <Route exact path="/"><Home/></Route>
        <Route path="/provinsi"><Province/></Route>
        <Route path="/hotline"><Hotline/></Route>
        <Route path="/contact"><Contact/></Route>
      </Switch>
    </Router>
    </>
  )
}
const Home = () => {
  return(
    <>
      <Navbar/>
      <Content/>
      <Footer/>
    </>
  )
}
const Province = () => {
  return(
    <>
      <Navbar/>
      <Provinsi/>
      <Footer/>
    </>
  )
}
const Hotline = () => {
  return(
    <>
      <Navbar/>
      <Hotlines/>
      <Footer/>
    </>
  )
}
const Contact = () => {
  return(
    <>
      <Navbar/>
      <Footer/>
    </>
  )
}