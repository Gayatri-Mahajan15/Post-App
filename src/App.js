import { loginPath, homePath, registerPath } from "./utils/routePath";
import HomePage from "./screens/HomePage";
import Login from "./screens/Login";
import Register from "./screens/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./AuthContext";
import PrivateRoute from "./PrivateRoute";
import PrivateComponent from "./PrivateComponent";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>

          <Route path="/private" Component={
            <PrivateRoute>
              <PrivateComponent />
            </PrivateRoute>
          }/>
          <Route render={() => <div>404 Not Found</div>} />

          <Route path={loginPath} Component={Login} />
          <Route path={registerPath} Component={Register} />
          <Route path={homePath} Component={HomePage} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
