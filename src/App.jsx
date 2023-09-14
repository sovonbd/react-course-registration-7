import "./App.css";
import Cards from "./components/Cards/Cards";

function App() {
  return (
    <>
      <div className="container p-14 bg-[#F3F3F3] h-screen">
        <h3 className="pb-12 text-3xl font-bold text-center text-[#1C1B1B]">Course Registration</h3>
        <Cards></Cards>
      </div>
    </>
  );
}

export default App;
