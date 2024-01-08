import Navbar from './components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import './App.css';
import Landing from './components/Landing/Landing';
import Signup from './components/Signup/Signup';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route exact path="/landing" element={<Landing/>}/>
      <Route exact path="/signup" element={<Signup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;

