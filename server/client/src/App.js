import React from "react"
import { BrowserRouter, Route } from 'react-router-dom'
import MainForm from './components/MainForm';
import Header from './components/Header';
import ShowHistory from "./components/ShowHistory";

function App() {
  return (
    <div className="ui container">
        <BrowserRouter>
            <Header /> 
            <Route path="/" exact component={MainForm} />
            <Route path="/history" exact component={ShowHistory} />
        </BrowserRouter> 
    </div>  
  )
}

export default App;