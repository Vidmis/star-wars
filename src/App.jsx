import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Films from "./components/Films";
import { pathnames } from "./constants/location";

function App() {
  return (
    <Router>
      <div className='App text-center grid grid-cols-12'>
        <Navigation />
        <section className='col-span-9'>
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
    </Router>
  );
}

export default App;
