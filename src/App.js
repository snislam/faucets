import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import NavBar, { CryptoContext } from './components/NavBar';
import FAQ from './pages/FAQ';
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import Register from './pages/Register';



function App() {
  const [crypto, setCrypto] = useState('Arbitrum Rinkeby')
  return (
    <div>
      <CryptoContext.Provider value={crypto}>
        <NavBar setCrypto={setCrypto} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/faq' element={<FAQ />} />
          <Route path='/log-in' element={<LogIn />} />
          <Route path='/register' element={<Register />} />
        </Routes>
        <Footer />
      </CryptoContext.Provider>
    </div>
  );
}

export default App;
