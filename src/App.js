import React from 'react';
import './App.css';
import Home from './pages/home';
import ErrorPage from './pages/error';
import SingleRoom from './pages/single-room';
import Rooms from './pages/rooms';
import { Route, Switch } from 'react-router-dom'
import Navebar from './components/navebar';



function App() {
  return (
    <div className="App">
    <Navebar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/rooms" component={Rooms} />
      <Route path="/rooms/:slug" component={SingleRoom} />
      <Route component={ErrorPage} />
      
    </Switch>
    </div>
  );
}

export default App;
