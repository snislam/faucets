import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
