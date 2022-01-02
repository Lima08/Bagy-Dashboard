import React from 'react';
import './style/app.css';
import Dashboard from './pages/Dashboard';
import StoresContextProvider from './context/StoresContext';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className='app'>
      <NavBar />
      <StoresContextProvider>
        <Dashboard />
      </StoresContextProvider>
    </div>
  );
}

export default App;
