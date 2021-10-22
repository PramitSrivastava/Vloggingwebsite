import "./App.css";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Signup from "./components/Signup";
import AddVlog from "./components/Addvlog";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ViewVlog from "./components/viewVlogs";
// import ViewVlog from "./components/viewVlogs";
import Matter from "./components/Matter";
import lifestyle from "./components/lifestyle";
import footer from "./components/footer";


function App() {
  return (
    <div>
    
      <Router>
        

    
        <Navbar></Navbar>
        {/* <Header></Header> */}
        <Route component={AddVlog} path={"/AddVlogs"}></Route>
        <Route component={Home} path={"/home"}></Route>
        <Route component={Signup} path={"/signup"}></Route>
        <Route component={ViewVlog} path={"/viewVlogs"}></Route>
        <Route component={lifestyle} path={"/lifestyle"}></Route>
       
        <Redirect to="/home" path="/"></Redirect>
       
      </Router>
     
    </div>
  );
}

export default App;
