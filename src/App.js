import './App.css';
import MainContent from './components/main-content';
import {Blog, CreatePost} from './components/blog';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Component } from 'react';
import Layout from './components/layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />
          <Route path='create' element={<CreatePost/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="App">
        <div className="main-container">
          <div className="sidebar">
            <h1 className="name">Nicholas Gorki</h1>
            <a href="mailto:nicholasgorki@gmail.com">nicholasgorki@gmail.com</a>
            <a href="https://www.github.com/ngorki">Github</a>
            <p className="bio"> I am a passionate Computer Science student at Purdue Univeristy. My academic
              concentrations
              are Software
              Engineering and Systems Software, however I love learning about everything Computer Science. I am
              also
              minoring in Political Science.</p>
          </div>
          <div className="main-content">
            <MainContent />
            <Blog />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
