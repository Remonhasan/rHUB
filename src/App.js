import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/pages/Navbar';
import Paper from './components/pages/Paper';
import Preview from "./components/Preview";
import Cart from './components/pages/Cart';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Navbar />

          <Routes>
            <Route path="/" element={<Paper />} />
            <Route path="/preview/:id" element={<Preview />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        
      </div>
    </div>
  );
}

export default App;
