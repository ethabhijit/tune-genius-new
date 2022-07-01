import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import NFTSection from "./components/NFTSection/NFTSection";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <NFTSection />
    </div>
  );
}

export default App;
