import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './components/pages/Dashboard';
import Planner from './components/pages/Planner';
import PersonalSpace from './components/pages/PersonalSpace';
import Project from './components/pages/Project';
import Tasks from './components/pages/Tasks';
import Notes from './components/pages/Notes';
import Pomodoro from './components/pages/Pomodoro';
import Settings from './components/pages/Settings';
import Menu from './components/common/Menu';
import Projects from './components/pages/Projects';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className='app-content'>
        <Menu />
      <div className='page-container'>
        
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/planner" element={<Planner />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/personal-space" element={<PersonalSpace />} />
            <Route path="/project/:id/view" element={<Project />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/pomodoro" element={<Pomodoro />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        
      </div>
    </div>
    </BrowserRouter>
  </React.StrictMode>
);

