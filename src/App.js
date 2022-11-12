
import React from 'react';
import './App.css';
import { AppProvider } from './context/Context';
import Layout from './components/Layout';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

const App = ({ element }) => {
  return (
      <AppProvider>
          <Layout />
      </AppProvider>
  );
}

export default App;
