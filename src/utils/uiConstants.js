export const formLabel = {
   email: "Email",
   password: "Password",
};

export const regValidators = {
   emailValidator: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
   passValidator: /^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{14,}$/,
   phone: /^[0-9]{10}$/,
};

export const formPlaceholder = {
    email: "you@gmail.com",
    password: "********",
    username: "Username",
    phone: "Phone Number",
    confirmPass: "Confirm Password"
};

export const formType = {
    emailType: "text",
    passType: "password",
    phoneType: "tel",
};

export const formName = {
    emailName: "email",
    passName: "password",
    username: "username",
    phone: "phone",
    confirmPass: "confirmPassword",
};