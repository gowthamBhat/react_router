import React from 'react';

import { Route, Switch } from "react-router-dom";

import Home from './components/Home';
import Products from './components/Products';
import Contact from './components/Contact';
import Carrers from './components/Carrers';
import NavBar from './components/NavBar';
import SongById from './components/SongById';
import QueryParams from './components/QueryParams';

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/queryparam" component={QueryParams} />
        <Route path="/song/:id?" render={(props) => <SongById {...props} />} />
        {/* we can make a parameter optional by adding question mark at the end */}
        <Route path="/products" render={props => <Products name="gowtham" {...props} />} />
        <Route path="/contact" component={Contact} />
        <Route path="/carrers" component={Carrers} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}
//Switch badlu alli Route olge 'exat' antha attribute add madidre home route yella route gu munche 
//display ago error na solve madathe
//Route will defautly pass 3 props
//if u want to pass a custom props to a component we should replace componet attribute in Route into Render
//function
export default App;
