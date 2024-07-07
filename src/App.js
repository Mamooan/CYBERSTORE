import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Product from './Compound/Product';
import Open from './Compound/Nav';
import Home1 from './Compound/Home';



function App() {
  return (
<>
<Open/>

<Router>
  <Switch>
  <Route path='/' exact component={Home1}/>
    <Route path='/products/:id' exact component={Product}/>
  </Switch>
  </Router>


</>
  );
}

export default App;



// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import './App.css';
// import Home from './Compound/Home';
// import Product from './Compound/Product';

// function App() {
//   return (
//  <>
 
//  <Router>
//   <Switch>
//     <Route path='/' exact  component={Home}/>
//     <Route path='/products/:id' exact  component={Product}/>
//   </Switch>
//  </Router>
//  </>
//   );
// }

// export default App;
