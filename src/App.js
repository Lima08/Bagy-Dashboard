import React from 'react';
import './style/app.css';
import Dashboard from './pages/Dashboard';
import StoresContextProvider from './context/StoresContext';
import NavBar from './components/NavBar';
import FooterBoard from './components/FooterBoard';

function App() {
  return (
    <div className='app'>
      <NavBar />
      <StoresContextProvider>
        <div className="">
          <Dashboard />
          <FooterBoard />
        </div>
      </StoresContextProvider>
    </div>
  );
}

export default App;
