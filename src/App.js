import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import NFTSection from "./components/NFTSection/NFTSection";
import Compare from "./components/Compare/Compare";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <NFTSection />
      <Compare />
    </div>
  );
}

export default App;
