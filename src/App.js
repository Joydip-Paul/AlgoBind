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

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Nav />
       <Switch>
          <Route path = "/about">

          </Route>
          <Route path = "/contact">

          </Route>
          <Route path="/">
            <Home />
          </Route>
          <Route>

          </Route>
      </Switch>
      </Router>
  );
}

export default App;
