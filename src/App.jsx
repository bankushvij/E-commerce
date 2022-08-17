import './App.css';
import React from 'react';
// import { Route } from 'react-router-dom';
import { Redirect, Route } from "react-router-dom";

//pages
import Homepage from './pages/Homepage';
import CommonPage from './pages/CommonPage';

// HOC
import HomepageHoc from './HOC/Homepage.Hoc';
import CommonPageHoc from './HOC/CommonPageHoc';

function App() {
  return (
    <>  
      
      <Route path="/" exact>
        <Redirect to="/Home/All" />
      </Route>
      <HomepageHoc path="/" exact component={Homepage} />
      <HomepageHoc path="/Home" exact component={Homepage} />
      <HomepageHoc path="/Home/:type" exact component={Homepage} />
      <CommonPageHoc path="/page/:type" exact component={CommonPage}/>
    </>
  );
}

export default App;
