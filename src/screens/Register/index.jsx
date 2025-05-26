import { useForm } from "react-hook-form";
import FormInputField from "../../components/FormInputField";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const password = watch("password"); // watch password for confirmation

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-slate-800">
          {" "}
          Sign Up{" "}
        </h2>

        {/* **************** Username */}
        <FormInputField
          type={"text"}
          placeholder={"Username"}
          name={"username"}
          inputHandler={{
            ...register("username", { required: "Username is required" }),
          }}
          errors={errors}
        />

        {/* **************** Email */}
        <FormInputField
          type={"text"}
          placeholder={"you@gmail.com"}
          name={"email"}
          inputHandler={{
            ...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: "Invalid email address",
              },
            }),
          }}
          errors={errors}
        />

        {/* **************** Phone number */}
        <FormInputField
          type={"tel"}
          placeholder={"Phone Number"}
          name={"phone"}
          inputHandler={{
            ...register("phone", {
              required: "Phone number is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Phone number must be 10 digits",
              },
            }),
          }}
          errors={errors}
        />

        {/* **************** Password */}
        <FormInputField
          type={"password"}
          placeholder={"********"}
          name={"password"}
          inputHandler={{
            ...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password should be at least 6 characters",
              },
            }),
          }}
          errors={errors}
        />

        {/* **************** Confirm Password */}
         <FormInputField
          type={"password"}
          placeholder={"Confirm Password"}
          name={"confirmPassword"}
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
      </form>
    </div>
  );
};

export default Register;
