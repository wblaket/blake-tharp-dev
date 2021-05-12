import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import Header from './Components/Header'
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import ProjectsListPage from './pages/ProjectsListPage';
import ProjectPage from './pages/ProjectPage';
import SkillsPage from './pages/SkillsPage';
import WorkPage from './pages/WorkPage';

import './App.css';



class App extends Component {

  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div>
          <Header />
          <div>
            <Switch>
              <Route path="/" component={HomePage} />
              <Route path="https://blaketharp.dev/about" component={AboutPage} />
              <Route path="https://blaketharp.dev/contact" component={ContactPage} />
              <Route path="https://blaketharp.dev/projects" component={ProjectsListPage} />
              <Route path="https://blaketharp.dev/project/:name" component={ProjectPage} />
              <Route path="https://blaketharp.dev/skills" component={SkillsPage} />
              <Route path="https://blaketharp.dev/work" component={WorkPage} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
