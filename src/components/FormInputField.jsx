import PropTypes from "prop-types";

const FormInputField = ({
  label,
  type,
  placeholder,
  name,
  inputHandler,
  errors,
}) => {
  return (
    <div>
       <label className="block mb-1 text-sm text-slate-600">{label}</label>
          <input
           className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
           type={type}
           name={name}
           placeholder={placeholder}
           {...inputHandler}
         />
        {errors[name] && <p>{errors[name].message}</p>}
    </div>
  );
};

FormInputField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  inputHandler: PropTypes.object,
  errors: PropTypes.object,
};

export default FormInputField;