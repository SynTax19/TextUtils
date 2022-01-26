import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="TextUtils" />
      <div className="container my-3">
        <About />
        <br />
        <br />
        <br />
        <TextForm heading="Enter the Text to Analyze " />
      </div>
    </>
  );
}

export default App;
