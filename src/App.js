import CovidTracker from "./components/CovidTracker";
import "./App.css";
import Header from "./components/Header";
import AllRouters from "./Routers/AllRouters";
import { HashRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <HashRouter basename="/">
        <Header />
        <div className="main-wrapper">
          <AllRouters />
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
