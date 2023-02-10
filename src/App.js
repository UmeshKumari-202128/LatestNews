import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  pageSize=5;
  apiKey= process.env.REACT_APP_NEWS_API
  state={
    progress:10
  }
  setProgress= (progress)=>{
    this.setState({
      progress:progress
    })
  }
  render() {  // JSX compile into html and then render the html
    return (
      <div>
        <Router>
          <NavBar/>
          <LoadingBar
            height={3}
            color='#f11946'
            progress={this.state.progress}
            
          />
          <Routes>
          <Route exact path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey}   key="general" pageSize={this.pageSize} category="general" country="in"/>}></Route>
          <Route exact path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey}   key="business" pageSize={this.pageSize} category="business" country="in"/>}></Route>
          <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey}   key="entertainment" pageSize={this.pageSize} category="entertainment" country="in"/>}></Route>
          <Route exact path="/general" element={<News setProgress={this.setProgress} apiKey={this.apiKey}   key="general" pageSize={this.pageSize} category="general" country="in"/>}></Route>
          <Route exact path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="health" pageSize={this.pageSize} category="health" country="in"/>}></Route>
          <Route exact path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="science" pageSize={this.pageSize} category="science" country="in"/>}></Route>
          <Route exact path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="sports" pageSize={this.pageSize} category="sports" country="in"/>}></Route>
          <Route exact path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="technology" pageSize={this.pageSize} category="technology" country="in"/>}></Route>
        </Routes>
        </Router>
      </div>
    )
  }
}
