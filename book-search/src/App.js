import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from './components/Nav';
import Jumbo from './components/Jumbo';
import Search from './pages/Search';
import Saved from './pages/Fav'
import './App.css';

function App() {
  return <Router>
    <Nav/>
    <Jumbo/>
    <Switch>
      <Route exact path="/" component={Search}/>
      <Route exact path="/saved" component={Saved}/>
    </Switch>
  </Router>
}

export default App;
