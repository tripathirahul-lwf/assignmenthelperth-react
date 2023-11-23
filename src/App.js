import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './component/footer/Footer';
import Header from './component/header/Header';
import Home from './component/Home';


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="" element={<Home/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
