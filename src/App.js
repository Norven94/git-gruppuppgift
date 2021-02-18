import { BrowserRouter as Router, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home";
import DataContext from "./contexts/DataContext";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <DataContext>
        <Route exact path="/"component={Home} />
      </DataContext>

      </Router>
    </div>
  );
}

export default App;
