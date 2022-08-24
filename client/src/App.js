import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ErrorPage from './templets/ErrorPage'
import Form from './templets/Form'
import Courses from './templets/Courses';
import NavBar from './templets/Navbar'
import NavBar3 from './templets/Navbar3'
import NavBar2 from './templets/Navbar2';
import PostsPage from './templets/PostsPage'
import Footer from './templets/Footer'
import BooksFrame from './templets/BooksFrams';
import PrivacyPage from './templets/PrivacyPage';
import Login from './templets/Login';
import Signup from './templets/Signup';
function App() {
  return (
    <Router>
      <>
        <div className="App">
          {/* <NavBar /> */}
          <div>
            <Switch>
              <Route path="/Admin" exact component={NavBar} />
              <Route path="/" exact component={NavBar3} />
              {/* <Route path="/posts/:movieName" exact component={Posts} /> */}
              <Route path="/post/:movieName" exact component={PostsPage} />
              <Route path="/books" exact component={BooksFrame} />
              <Route path="/course" exact component={Courses} />
              <Route path="/YourPost" exact component={Form} />
              <Route path="/privacy" exact component={PrivacyPage} />
              <Route path="/login" exact component={Login} />
              <Route path="/Signup" exact component={Signup} />
              <Route path="/:Error" component={ErrorPage} />

            </Switch>
          </div>
          <Footer/>
        </div>
      </>
    </Router>
  );
}

export default App;
