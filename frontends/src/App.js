import './App.css';
import NavBar from './component/Navbar';
import Footer from './component/Footer';
import Mainpage from './pages/Mainpage';
import Info from './pages/Info';
import Community from './pages/Community';
import Selftrain from './pages/Selftrain';
import SelftrainDetail from './pages/SelftrainDetail';
import VideoClass from './pages/VideoClass';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginModal from './component/Account/LoginModal';
import 'semantic-ui-css/semantic.min.css'
// import { Navbar, NavDropdown,Nav } from 'react-bootstrap';

function App() {
  return (
    <BrowserRouter>
        
        <NavBar></NavBar>
        <Switch>
          <Route exact path="/" component={Mainpage}></Route>
          <Route path="/info" component={Info}></Route>
          <Route path="/Community" component={Community}></Route>
          <Route path="/selftrain/detail" component={SelftrainDetail}></Route>
          <Route path="/selftrain" component={Selftrain}></Route>
          <Route path="/videoClass" component={VideoClass}></Route>
          <Route render={() => <div className='error'>에러 페이지</div>} />
          <Route path="/login" component={LoginModal}></Route>
        </Switch>
        <br></br>
        <Footer></Footer>
      
    </BrowserRouter>
  );
}

export default App;
