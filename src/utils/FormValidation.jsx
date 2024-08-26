const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
const passwordRegex =
  /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%&*()-+=^])(?=\S+$).{8,20}$/;

const handleValidation = (email, password) => {
  const validEmail = emailRegex.test(email);
  const validPassword = passwordRegex.test(password);

  if (!validEmail && !validPassword) return "Both email & password is invalid";

  if (!validEmail) return "Invalid E-mail";

  if (!validPassword)
    return `Invalid password. It must contains at least 8 characters.
at least one digit.
at least one uppercase letter.
at least one lowercase letter.
at least one special character from !@#$%&*()-+=^`;

  return null;
};

export default handleValidation;
