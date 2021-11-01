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
import MobileApp from './Components/MobileApp/MobileApp';
import WebServices from './Components/WebServices/WebServices';
import UIUxDesign from './Components/UIUxDesign/UIUxDesign';

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <GoTop />
      <Nav />
      <Switch>
        <Route path="/mobile-app">
          <MobileApp />
        </Route>

        <Route path="/contact">
          <Contact />
        </Route>

        <Route path="/web-services">
          <WebServices />
        </Route>

        <Route path="/academy">
          <UIUxDesign />
        </Route>

        <Route path="/">
          <Home />
        </Route>

      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
