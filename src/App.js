import "./App.css";
import Home from "./component/Home";
import DataProvider from "./context/DataProvider";
function App() {
  return (
    <>
      <DataProvider>
        {" "}
        {/* if passing here then it is called props */}
        <Home /> {/* but if rapped like this then it is called children*/}
      </DataProvider>
    </>
  );
}

export default App;

// hooks used here create { use-context, use-state ,use-effect}
// react-codemirror2 codemirror  is used to manage compiler
// material ui is used here to handle design part
