import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Settings from './pages/Settings';
import PageNotFound from './pages/PageNotFound';
import { TasksProvider } from './shared/context';

const App = () => {
  return (
    <TasksProvider>
      <Router>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Settings />} path="/settings" />
          <Route element={<PageNotFound />} path="*" />
        </Routes>
      </Router>
    </TasksProvider>
  );
}

export default App;
