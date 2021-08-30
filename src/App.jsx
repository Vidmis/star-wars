import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Films from "./components/Films";
import { pathnames } from "./constants/location";
import starWarsImage from "./images/characters.jpeg";

function App() {
  return (
    <Router>
      <div
        className='bg-cover bg-scroll text-palette-sun bg-no-repeat bg-center'
        style={{ backgroundImage: `url(${starWarsImage})` }}
      >
        <div className='App text-center grid grid-cols-12'>
          <Navigation />
          <section className='col-span-12'>
            <Switch>
              <Route exact path={pathnames.about}>
                <About />
              </Route>
              <Route path={pathnames.films}>
                <Films />
              </Route>
            </Switch>
          </section>
        </div>
      </div>
    </Router>
  );
}

export default App;
