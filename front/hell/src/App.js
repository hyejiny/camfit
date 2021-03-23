import './App.css';
import NavBar from './component/Navbar';
import Footer from './component/Footer';
import Mainpage from './pages/Mainpage';
import Info from './pages/Info';
import Article from './pages/Article';
import Exercise from './pages/Exercise';
import MoneyClass from './pages/MoneyClass';
import LoginModal from './component/Login/LoginModal';
import Route from 'react-router-dom/es/Route';
import { BrowserRouter, Switch } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css'
// import { Navbar, NavDropdown,Nav } from 'react-bootstrap';

function App() {
  return (
    <BrowserRouter>
        
        <NavBar></NavBar>
        <Switch>
          <Route exact path="/" component={Mainpage}></Route>
          <Route path="/info" component={Info}></Route>
          <Route path="/article" component={Article}></Route>
          <Route path="/exercise" component={Exercise}></Route>
          <Route path="/moneyclass" component={MoneyClass}></Route>
          <Route path="/login" component={LoginModal}></Route>
        </Switch>
        <br></br>
        <Footer></Footer>
      
    </BrowserRouter>
  );
}

export default App;
