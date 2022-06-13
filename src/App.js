import "./App.scss";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import MainDisplay from "./components/mainDisplay/MainDisplay";

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <MainDisplay />
    </div>
  );
}

export default App;
