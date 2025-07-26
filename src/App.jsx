import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import ToDoPage from "./pages/ToDoPage/ToDoPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
     <Header/>

     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/ToDo" element={<ToDoPage/>}/>
     </Routes>
    </>
  );
}

export default App;
