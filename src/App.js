import CovidTracker from "./components/CovidTracker";
import "./App.css";
import Header from "./components/Header";
import AllRouters from "./Routers/AllRouters";

function App() {
  return (
    <div>
      <Header />
      <div className="main-wrapper">
        <AllRouters />
      </div>
    </div>
  );
}

export default App;
