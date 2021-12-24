import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
// import About from './components/pages/About';
// import Contact from './components/pages/Contact';
// import Faq from './components/pages/Faq';
// import Example from './components/pages/Example';
// import Cardprofile from './components/Cardprofile';

function App() {
   return (
      <Router>
         <Navbar />
         <Home />
         <Routes>
            <Route exact path="/" element={<Home />}></Route>
            {/* <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/contact" element={<Contact />}></Route>
            <Route exact path="/faq" element={<Faq />}></Route>
            <Route exact path="/example" element={<Example />}></Route>
            <Route exact path="/cardprofile" element={<Cardprofile />}></Route> */}
         </Routes>
      </Router>
   );
}

export default App;
