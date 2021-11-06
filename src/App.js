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
import Nav from './Components/Shared/Navbar/Nav';
import Footer from './Components/Shared/Footer/Footer';
import GoTop from './Components/Shared/GoTop/GoTop';

function App() {
  return (
    <Router>
      <GoTop />
      <Nav />
      <Switch>

        <Route path="/">
          <Home />
        </Route>

      </Switch>
      <Footer />
    </Router>
  );
}
// Developer Joydip Paul
export default App;
