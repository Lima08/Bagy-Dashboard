import { Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Stores from './pages/Stores';
import Sales from './pages/Sales';
import Clients from './pages/Clients';
import Products from './pages/Products';
import Goals from './pages/Goals';
import Settings from './pages/Settings';
import './style/app.css';

function App() {
  return (
    <main className='app'>
      <NavBar />
      <Header />
      <Routes>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/stores' element={<Stores />} />
        <Route path='/sales' element={<Sales />} />
        <Route path='/clients' element={<Clients />} />
        <Route path='/products' element={<Products />} />
        <Route path='/goals' element={<Goals />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/' element={<Navigate replace to='/dashboard' />} />
      </Routes>
    </main>
  );
}

export default App;
