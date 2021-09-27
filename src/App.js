
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SingUp from './components/pages/SingUp';
import Footer from './components/Footer';
function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' exact component={Services} />
        <Route path='/product' exact component={Products} />
        <Route path='/sing-up' exact component={SingUp} />
      </Switch>
      <Footer />
    
    </Router>
     
    </>
  );
}

export default App;
