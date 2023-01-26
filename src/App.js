import './App.css';
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes basename="/fax-sender-login">
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;