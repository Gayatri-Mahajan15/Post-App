import { loginPath, homePath,registerPath } from "./utils/routePath";
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
      <Route path={loginPath} Component={Login} />
      <Route path={registerPath} Component={Register} />
      <Route  path={homePath} Component={HomePage} />
    </Routes>
  </BrowserRouter>
 )
};

export default App;
