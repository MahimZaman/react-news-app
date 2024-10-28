import { useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Newsboard } from "./components/Newsboard";

function App() {

  const [category, setCategory] = useState("general");
  const [region , setRegion] = useState("us");

  return (
    <div>
      <Navbar setCategory={setCategory} setRegion={setRegion} region={region}/>
      <div className="contianer">
        <Newsboard category={category} region={region}/>
      </div>
    </div>
  );
}

export default App;
