import NavBar from "./nav.js";
import Home from "./Home.js";
import AboutUs from './About.js';
import Gallery from "./Gallery.js";
import ContactUs from "./Contact.js";
import OnlineOrder from "./online.js";
import Cart from "./Cart.js";
import Footer from './Footer.js';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
        <Router>
        <div>
            <NavBar />
                <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/AboutUs' component={AboutUs} />
                        <Route path='/Gallery' component={Gallery} />
                        <Route path='/ContactUs' component={ContactUs} />
                        <Route path='/OnlineOrder' component={OnlineOrder} />
                        <Route path="/Cart" component={Cart} />
                </Switch>        
                <Footer /> 
                
        </div>
        </Router>
    
   
  );

}


export default App;