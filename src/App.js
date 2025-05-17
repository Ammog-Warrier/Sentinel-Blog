import Navbar from './Navbar';
import Home from './home';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Create from './create';
import Blogdetails from './blogdetails';
import NotFound from './notfound';
// Switch isused to make sure only one componenet runs at a time


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Switch> 
            <Route path="/" exact>
            <Home/>

            </Route>
            <Route path="/create" exact>
            <Create/>

            </Route>
            <Route path="/blogs/:id" >
            <Blogdetails/>

            </Route>
            <Route path="*">
              <NotFound/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
