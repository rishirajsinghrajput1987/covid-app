import CovidTracker from "./components/CovidTracker";
import "./App.css";
import Header from "./components/Header";
import AllRouters from "./Routers/AllRouters";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <div className="main-wrapper">
          <AllRouters />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
