import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './Pages/MainPage';
import Routines from './Pages/Routines';
import Routine from './Pages/Routine';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route path="/routines" element={<Routines />} />
          <Route path="/routine">
            <Route path=":id" element={<Routine />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
