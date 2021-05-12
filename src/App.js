import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  HashRouter,
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
import NotFoundPage from './pages/NotFoundPage';

import './App.css';



class App extends Component {

  render() {
    return (
      <HashRouter basename={process.env.PUBLIC_URL}>
        <div>
          <Header />
          <div>
            <Switch>
              <Route path="/" component={HomePage} exact/>
              <Route path="/about" component={AboutPage} />
              <Route path="/contact" component={ContactPage} />
              <Route path="/projects" component={ProjectsListPage} />
              <Route path="/project/:name" component={ProjectPage} exact />
              <Route path="/skills" component={SkillsPage} />
              <Route path="/work" component={WorkPage} />
              <Route component={NotFoundPage} />
            </Switch>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
