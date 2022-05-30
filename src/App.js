import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './Pages/MainPage';
import Routines from './Pages/Routines';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route path="/routines" element={<Routines />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
