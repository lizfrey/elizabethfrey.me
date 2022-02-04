import './App.scss';
import { Component } from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import Resume from './components/resume';


class App extends Component{
  render(){
    return (
        
      <Router>
        	<Navbar />
			<Routes>
                <Route exact path='/' element={< Home />}></Route>
				        <Route exact path='/home' element={< Home />}></Route>
                <Route exact path='/about' element={< About />}></Route>
                <Route exact path='/contact' element={< Contact />}></Route>
                <Route exact path='/resume' element={< Resume />}></Route>
            </Routes>
            <footer className = "d-block" >
            <p className = "text-center" > ©Copyright 2022 Elizabeth Frey </p> 
          </footer>
      </Router>
      
      
    );
  }
}

export default App;
