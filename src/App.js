import './App.css';
import About from './component/about/About';
import Contact from './component/contact/Contact';
import Content from './component/content/Content';
import Faq from './component/faq/Faq';
import Footer from './component/footer/Footer';
import Header from './component/header/Header';
import Hero from './component/hero/Hero';
import Review from './component/review/Review';
import Services from './component/services/Services';
import Steps from './component/step/Steps';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Steps />
      <About />
      <Services />
      <Content />
      <Review />
      <Faq />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
