
import React from 'react';

// react hooks
import { useState, useEffect } from 'react';

//Router 
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  NavLink
} from 'react-router-dom';

//Pages
import Homepage from './pages/homepage';
import {AboutMe} from './pages/about/about';
import Contact from './pages/contact/contact';
import ProjectsPage from './pages/projects';
import Login from './pages/login';
import AdminDashboard from './pages/admin/adminDashboard';
import ErrorBoundary from './pages/errorBoundary';

//Typescript interface model 
import { ProjectsModel } from './Projects.model';

export const App:React.FC = () => {
  const [Projects, setProjects] = useState<ProjectsModel[]>([]);
  const [error, setError] = useState("");
  
  //Fetching Projects from backend 
  useEffect(()=>{
    fetch('/api/user/')
      .then(res => res.json())
      .then((Projects) =>{
        console.log(Projects, "Projects")
        setProjects(Projects)
      })
      .catch((err) => setError(err));
  }, []);

  return (
    <>
    <ErrorBoundary>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Homepage Projects={Projects} />
          </Route>
          <Route exact path='/about'>
            <AboutMe />
          </Route>
          <Route exact path='/projects'>
            <ProjectsPage Projects={Projects} />
          </Route>
          <Route exact path='/contact'>
            <Contact />
          </Route>
          <Route exact path='/admin/login'>
            <Login />
          </Route>
          <Route exact path='/admin/dashboard'>
            <AdminDashboard />
          </Route>
        </Switch>
      </Router>
    </ErrorBoundary>
    </>
  )
}

export default App;