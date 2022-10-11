import { Routes, Route} from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Home from './pages/Home';
import Footer from './pages/Footer';
import Header from './pages/Header';
import Navbar from './pages/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Header />
        <div className='container'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      <Footer />
    </>
  );
}

export default App;