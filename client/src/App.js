
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Dashboard from "./Pages/Dashboard";

import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Dashboard1 from "./Components/Dashboard1";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard1" element={<Dashboard1 />} />
        </Routes>
      </BrowserRouter>

      { /*  
                
        <Login/>
        <Signup/>
        
  */ }
    </div>
  );
}

export default App;
