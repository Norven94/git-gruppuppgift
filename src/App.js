import Home from "./pages/Home";
import DataContext from "./contexts/DataContext";

function App() {
  return (
    <div className="App">
        <DataContext>
        <Home />
      </DataContext>
    </div>
  );
}

export default App;
