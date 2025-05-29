import { Link } from "react-router-dom";
import { registerPath } from "../../utils/routePath";
import { useForm } from "react-hook-form";
import FormInputField from "../../components/FormInputField";
import {
  regValidators,
  formLabel,
  formPlaceholder,
  formType,
  formName,
} from "../../utils/uiConstants";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    toast.success("Login successfully", {
      position: "top-right",
    });
    console.log(data);
  };

  return (
    <>
      <Header />
      <div className="flex items-center justify-center min-h-[80vh] p-4 bg-gray-100">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm space-y-6"
        >
          <h2 className="text-2xl font-bold text-center text-slate-800">
            Login
          </h2>

          {/* **************** Email */}
          <FormInputField
            type={formType.emailType}
            label={formLabel.email}
            placeholder={formPlaceholder.email}
            name={formName.emailName}
            inputHandler={{
              ...register("email", {
                required: "Email is required",
                pattern: {
                  value: regValidators.emailValidator,
                  message: "Invalid email address",
                },
              }),
            }}
            errors={errors}
          />

          {/* **************** Password */}
          <FormInputField
            type={formType.passType}
            label={formLabel.password}
            placeholder={formPlaceholder.password}
            name={formName.passName}
            inputHandler={{
              ...register("password", {
                required: "Password is required",
                pattern: {
                  value: regValidators.passValidator,
                  message: "Incorrect password",
                },
              }),
            }}
            errors={errors}
          />

          {/* **************** Login */}
          <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
            Login
          </button>
          <ToastContainer />

          <p className="text-sm text-slate-600">Don't have an account?</p>

          <Link
            to={registerPath}
            className="text-blue-600 text-sm hover:underline"
          >
            Sign up
          </Link>
          <Footer />
        </form>
        <ToastContainer />
      </div>
    </>
  );
};

export default Login;
