import React from 'react';
import {BrowserRouter , Route , Switch} from 'react-router-dom';
import Navbar from './components/navbar';
import work  from './components/work';
import home  from './components/home';
import about  from './components/about';
import portofolio  from './components/portofolio';
import profile  from './components/profile';
/* import socialmedia  from './components/socialmedia';
import footer  from './components/footer'; */
import Contact from './components/contact';
import NotFound from './components/NotFound/NotFound';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Navbar/>
    <Switch>
    <Route exact path="/" component={home}  />
    <Route path="/work" component={work}  />
    <Route path="/about" component={about}  />
    <Route path="/profile" component={profile}  />
    <Route path="/portofolio" component={portofolio}  />
    <Route path="/contact"  component={Contact}  />
    <Route exact component={NotFound}  />
    </Switch>
     
    </div>
    </BrowserRouter>
  );
}

export default App;
