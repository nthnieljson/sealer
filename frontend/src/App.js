import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import NavbarDesktop from "./components/Navbar/NavbarDesktop";
import EventDetail from "./pages/EventDetail";
import Events from "./pages/Events";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <div>
        <BrowserRouter>
          <div className="mt-5">
            <NavbarDesktop />
            <Switch>
              <Route path="/events" component={Events} />
              <Route path="/event/:id" component={EventDetail} />
              <Route path="/" component={Home} />
            </Switch>
          </div>
          <div className="mt-5">
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
