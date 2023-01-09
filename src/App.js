import HeaderHigh from "./HeaderHigh/HeaderHigh.jsx";
import "./App.css";
import HeaderLow from "./HeaderLow/HeaderLow.jsx";
import Body from "./Body/Body.jsx";

const App = () => {
  return (
    <div className="App">
      <HeaderHigh />
      <HeaderLow />
      <Body />
    </div>
  );
};

export default App;
