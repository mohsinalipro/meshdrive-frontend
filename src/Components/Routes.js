import {
    Router,
    Route,
    Link
  } from 'react-router-dom';
  import React from 'react';
  import ReactDOM from 'react-dom';

  const customHistory = createBrowserHistory();
const CustomRoutes = ()=>(

<Router history={customHistory}>
    <div>
     
       <Route exact path="/" component={App}></Route>
        <Route exact path="/register" component={RegisterPage}></Route>
        <Route exact path="/login" component={LoginPage}></Route>
       
    </div>
</Router>


)
export default CustomRoutes;
