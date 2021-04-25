import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Infos from "./pages/Infos";
import Portfolio from "./pages/Portfolio";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route path="/" exact={true}>
          <Home />
        </Route>
        <Route path="/about" exact={true}>
          <About />
        </Route>
        <Route path="/portfolio" exact={true}>
          <Portfolio />
        </Route>
        <Route path="/infos" exact={true}>
          <Infos />
        </Route>
        <Route path="/contact" exact={true}>
          <Contact />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
