import Navbar from "./components/Navbar";
import Heading from "./components/Heading";
import CallsList from "./components/CallsList";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <div className="main-section">
        <Heading />
        <CallsList />
      </div>
    </div>
  );
}

export default App;
