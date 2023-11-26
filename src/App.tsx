import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';
import { TasksProvider } from './shared/context';

const App = () => {
  return (
    <TasksProvider>
      <Router>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<PageNotFound />} path="*" />
        </Routes>
      </Router>
    </TasksProvider>
  );
}

export default App;
