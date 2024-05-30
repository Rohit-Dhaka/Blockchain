
import React,{useEffect} from "react";
import './App.css';
import Hero from './components/Hero';
import './assets/css/root.css'
import Yellowsection from './components/Yellowsection';
import About from './components/About';
import Tokenomics from './components/Tokenomics';
import Footer from './components/Footer';
import News from './components/News';
import Ecosystem from './components/Ecosystem';
import Utility from './components/Utility';
import Roadmap from './components/Roadmap';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, [])
  return (
    <div>
      <Hero />
       <Yellowsection />
      <About />
      <Tokenomics />
      <Utility />
      <Ecosystem />
      <Roadmap />
      <News />
      <Yellowsection />
      <Footer /> 
    </div>
  );
}
export default App;