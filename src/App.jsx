import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import NavBar from './components/NavBar';
import Create from './pages/Create';
import View from './pages/View';
import Store from './store/Store';

function App() {
  const footerinfo = {
    nombre: '© Kruger Corp. 2022. Transforming Enterprises, Boosting Lives.',
   };
  return (
    <div className="container">
    <Store >
    <Router>
      <div className='nav-tittle'>
      <NavBar />
      </div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/create" element={<Create />} />
        <Route path="/view/_bookId" element={<View />} />
      </Routes>
      <Footer {...footerinfo} />
    </Router>
    </Store>  
  </div>
  );
}

export default App;

