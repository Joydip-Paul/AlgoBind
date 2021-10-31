import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.min.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
// import Navbar from './Components/Shared/Navbar/Navbar';
import Nav from './Components/Shared/Navbar/Nav';
import Footer from './Components/Shared/Footer/Footer';
import Contact from './Components/Contact/Contact';
import GoTop from './Components/Shared/GoTop/GoTop';

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <GoTop />
      <Nav />
       <Switch>
          <Route path="/about">

          </Route>
        <Route path="/contact">
          <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          <Route>

          </Route>
      </Switch>
      <Footer />
      </Router>
  );
}

export default App;
