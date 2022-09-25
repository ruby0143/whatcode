import './App.css';
import Header from './components/Header/Header';
import About from './components/About/About';
import Vision from "./components/Vision/Vision";
import Mission from './components/Mission/Mission';
import CSR from './components/CSR/CSR';
import Founder from './components/Founder/Founder';
import Company from './components/companies/Company';
import Footer from './components/footer/Footer';
function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Vision />
      <Mission />
      <CSR />
      <Founder />
      <Company />
      <Footer />
    </div>
  );
}

export default App;
