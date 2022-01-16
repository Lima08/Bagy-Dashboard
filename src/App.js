import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Stores from './pages/Stores';
import NavBar from './components/NavBar';
import Header from './components/Header';
import './style/app.css';

function App() {
  return (
    <main className='app'>
      <NavBar />
      <Header />
      <Routes>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/stores' element={<Stores />} />
        <Route path='/' element={<Navigate replace to='/dashboard' />} />
      </Routes>
    </main>
  );
}

export default App;
