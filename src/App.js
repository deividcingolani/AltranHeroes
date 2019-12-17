import React from 'react';
import { Router, Route } from "react-router-dom";
import { createBrowserHistory as createHistory } from 'history'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { HomePage } from './containers/HomePage/homePage';
import { connect } from 'react-redux';

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
              <Nav.Link to="/" activeClassName="selected">
                Home
                </Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Route path="/" component={HomePage} />

      </Router>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    gnomes: state.gnomes,
  }
}

export default connect(
  mapStateToProps,
  null
)(App);

