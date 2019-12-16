import React from 'react';
import { Router, Route } from "react-router-dom";
import { createBrowserHistory as createHistory } from 'history'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import HomePage from './containers/HomePage/homePage';

const history = createHistory();

function App() {
    
  return (
    <div className="App">
      <Router history={history}>
        <Navbar bg="primary" expand="lg" variant="dark" >
          <Navbar.Brand href="#home">ALTRAN HEROES</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link 
              to={{
                pathname: '/',
                state: {
                    type: 'qx'
                }
            }}>
              Home</Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Route path="/" component={HomePage} />

      </Router>
    </div>
  );
}

export default App;