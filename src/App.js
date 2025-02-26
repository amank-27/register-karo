import "./App.css";
import { About } from "./components/about/About";
import { Customer } from "./components/customer/Customer";
import { Footer } from "./components/footer/Footer";
import { Hero } from "./components/hero/Hero";
import { Navbar } from "./components/navbar/Navbar";
import { Services } from "./components/services/Services";
import { Subscribe } from "./components/subscribe/Subscribe";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Subscribe />
      <Customer />
      <Footer />
    </div>
  );
}

export default App;
