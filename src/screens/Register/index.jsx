import { Outlet } from "react-router-dom";

const Register = () =>  {
    return (
        <div className="container">
            <Outlet />
            Please fill the form.
        </div>
    );
};

export default Register;