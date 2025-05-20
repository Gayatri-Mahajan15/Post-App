import HomePage from "./screens/HomePage";
import Login from "./screens/Login";
import Register from "./screens/Register";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route index path="/" Component={Login} />
      <Route path="/register" Component={Register} />
      <Route  path="/home" Component={HomePage} />
    </Routes>
  </BrowserRouter>
 )
};

export default App;
