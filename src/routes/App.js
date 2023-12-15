
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from '../Pages/Main.js';
import Quizes from '../Pages/Quizes.js';
import Results from '../Pages/Results.js';
import Home from '../Pages/Home.js';
import Register from '../Pages/auth/Register.js';
import Login from '../Pages/auth/Login.js';
import { HashRouter } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/quizes" element={<Quizes />} />
      <Route path="/results" element={<Results />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/main" element={<Main />} />
      <Route path="/" element={<Home />} />
    </Routes>
    </BrowserRouter>
  );
};

export default App;