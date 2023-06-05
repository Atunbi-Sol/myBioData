import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import BioData from "./BioData/BioData";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <BioData />
    </div>
  );
}

export default App;
