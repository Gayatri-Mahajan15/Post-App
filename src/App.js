import HomePage from "./screens/HomePage";
import Login from "./screens/Login";
import Register from "./screens/Register";
import { Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
 } from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path="/" element={<Register />}>
    <Route index element={<Login />} /> 
    <Route path="/home" element={<HomePage />} />   
  </Route>
 )
);

function App() {
  return <RouterProvider router={router} />;
};

export default App;
