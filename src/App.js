import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from "react-router-dom";
import HomePage from './components/homePage';
import Header from './components/header';
import Profile from './components/profile';
import MyOrders from './components/myOrders';
import Bags from './components/bags';
import Context from './components/context';
import Design from './components/design';
import Story from './components/story';
import News from './components/news';
import Contact from './components/contact';
import Collection from './components/collection';
import Cart from './components/cart';
function App() {
  return (
    <div className="App">
        
        <Router>
          <Context>
        <Header/>
        <Redirect exact from="/" to="/home"/>
            <Route exact path="/home">
              <HomePage/>
            </Route>
            <Route   path="/home/design">
            <div className="pages"><Design/></div>
            </Route>
            <Route  path="/home/collection">
            <div className="pages"><Collection/></div>
            </Route>
            <Route  path="/home/bags">
            <div className="pages"><Bags/></div>
            </Route>
            <Route exact path="/home/story">
            <div className="pages"><Story/></div>
            </Route>
            <Route  path="/home/news">
            <div className="pages"><News/></div>
            </Route>
            <Route exact path="/home/contact">
            <div className="pages"><Contact/></div>
            </Route>
            <Route exact path="/home/profile">
              <div className="pages"><Profile/></div>
            </Route>
            <Route exact path="/home/myOrders">
              <div className="pages"><MyOrders/></div>
            </Route>
            <Route path="/home/cart">
              <div className="pages"><Cart/></div>
            </Route>
            </Context>
        </Router>
      
    </div>
  );
}

export default App;
