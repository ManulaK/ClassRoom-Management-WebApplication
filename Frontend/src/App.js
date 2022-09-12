import "./App.css";
import AddStudent from "./components/addStudent";
import NavHeader from "./components/header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import AllStudent from "./components/AllStudent";
function App() {
  return (
    <Router>
      <div>
        <NavHeader />
        <Routes>
          <Route path='/add' element={<AddStudent />} />
          <Route path='/all' element={<AllStudent />} />
          <Route exact path='/' element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}


