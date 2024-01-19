import ContextProvider from './context/ContextProvider';
import "./App.css";
import Home from "./components/Home/Home";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <>
      <ContextProvider>
        <Sidebar />
        <Home />
      </ContextProvider>
    </>
  );
}

export default App;
