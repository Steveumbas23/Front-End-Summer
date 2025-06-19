import { useState } from "react";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";

function App() {
  let [title, setTitle] = useState("Header");

  const headerChange = () => {
    setTitle("Judul");
  };
  return (
    <div className="app-container">
      <Header text={title} headerChange={headerChange} />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
