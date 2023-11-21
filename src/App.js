import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/pages/Navbar';
import Paper from './components/pages/Paper';
import Preview from "./components/Preview";

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Navbar />

        <Router>
          <Routes>
            <Route path="/" element={<Paper />} />
            <Route path="/preview/:id" element={<Preview />} />
          </Routes>
        </Router>

      </div>
    </div>
  );
}

export default App;
