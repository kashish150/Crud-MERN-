
import './App.css';
import axios from 'axios';
import React,{useState,useEffect} from'react';
import Forms from './Forms.js';
import Nav from'./Nav.js';
import Data from './Data.js';
import Update from './Update.js';
import {Route, BrowserRouter,Switch } from 'react-router-dom';
function App() {
 return<BrowserRouter>
  <Nav/>
      <Switch>
      <Route path="/forms" exact  component={Forms} />
      <Route path="/data" exact  component={Data} />
      <Route path="/update/:id" exact  component={Update} />
      </Switch>
 </BrowserRouter>
}
export default App;
