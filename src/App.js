import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Banner from './Pages/Banner/Banner';
import Footer from './Pages/Footer/Footer';

function App() {
  return (
    <div>
      <BrowserRouter>
       <Switch>
         <Route exact path="/">
            <Home />
         </Route>
         <Route exact path="/banner">
            <Banner />
         </Route>
         <Route exact path="/footer">
            <Footer />
         </Route>
       </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
