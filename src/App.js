import CovidTracker from "./components/CovidTracker";
import "./App.css";
import Header from "./components/Header";
import AllRouters from "./Routers/AllRouters";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div>
      <Router basename={process.env.PUBLIC_URL}>
        <Header />
        <div className="main-wrapper">
          <AllRouters />
        </div>
      </Router>
    </div>
  );
}

export default App;
