import { useForm } from "react-hook-form";
import FormInputField from "../../components/FormInputField";
import {
  formName,
  formPlaceholder,
  formType,
  regValidators,
} from "../../utils/uiConstants";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    toast.success("Data filled successfully", {
          position: "top-right"
        });
    console.log(data);
  };

  const password = watch("password"); // watch password for confirmation

  return (
    <>
    <Header />
    <div className="flex items-center justify-center min-h-[80vh] p-4 bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-slate-800">
          Sign Up
        </h2>

        {/* **************** Username */}
        <FormInputField
          type={formType.emailType}
          placeholder={formPlaceholder.username}
          name={formName.username}
          inputHandler={{
            ...register("username", { required: "Username is required" }),
          }}
          errors={errors}
        />

        {/* **************** Email */}
        <FormInputField
          type={formType.emailType}
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

        {/* **************** Phone number */}
        <FormInputField
          type={formType.phoneType}
          placeholder={formPlaceholder.phone}
          name={formName.phone}
          inputHandler={{
            ...register("phone", {
              required: "Phone number is required",
              pattern: {
                value: regValidators.phone,
                message: "Phone number must be 10 digits",
              },
            }),
          }}
          errors={errors}
        />

        {/* **************** Password */}
        <FormInputField
          type={formType.passType}
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

        {/* **************** Confirm Password */}
        <FormInputField
          type={formType.passType}
          placeholder={formPlaceholder.confirmPass}
          name={formName.confirmPass}
          inputHandler={{
            ...register("confirmPassword", {
              required: "Please confirm your password",
              validate: (value) =>
                value === password || "Passwords do not match",
            }),
          }}
          errors={errors}
        />

        {/* **************** Sign up */}
        <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
          Sign up
        </button>
        <Footer />
      </form>
      <ToastContainer />
    </div>
    
    </>
    
  );
};

export default Register;
