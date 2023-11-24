import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './component/footer/Footer';
import Header from './component/header/Header';
import Home from './component/Home';
import Thankyou from './component/thanyou/Thankyou';


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="" element={<Home/>} />
          <Route path="/thankyou" element={<Thankyou/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
