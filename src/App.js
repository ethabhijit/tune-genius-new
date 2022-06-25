import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import SongsList from "./components/SongsList/SongsList";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
