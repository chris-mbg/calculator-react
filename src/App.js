import DataContextProvider from "./contexts/DataContext";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <DataContextProvider>
        <Home />
      </DataContextProvider>
    </div>
  );
}

export default App;
