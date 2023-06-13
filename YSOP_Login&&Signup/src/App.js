
import './App.css';
import LoginPage from './Pages/LoginPage';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import SignupPage from './Pages/SignupPage';

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Music from './Pages/Music'

function App() {
  return (
    /*<div>
      <ToastContainer position="top-center" />
      <LoginPage />
      
    </div>
    */
    <div className="app">
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<SignupPage />}></Route>
          <Route path="/music" element={[<Music />]}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
//<LoginPage />
//<SignupPage />
// <Route path="/login" element={<LoginPage />} />

//<Route path="/" element={<SignupPage />}></Route>
