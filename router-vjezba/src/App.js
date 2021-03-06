import {BrowserRouter, Route, Link} from 'react-router-dom'; //BrowserRouter može biti i u index JS ali mora biti unutar {}
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';


function App() {
  return (
    <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/home">Home</Link>  
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
            {/*za link koristimo to= a ne href kak se koristi u HTML-u*/}
          </nav>

          <Route path="/" exact component={Home} /> {/*exact nam služi da radi distinkciju između putanja*/}
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/contact" component={Contact} />
          
        </div> 
    </BrowserRouter>

  );
}

export default App;
