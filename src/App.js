import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Myport from './components/Myport';
import Resume from './components/Resume';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
      <About />
      <Myport />
      <Resume />
      <Contact />
      </div>
    </div>
  );
}

export default App;
