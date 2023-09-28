const validateEmail = (email) => {
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  let f = 0;
  if (!emailRegex.test(email)) {
    document.getElementById("email").classList.add("errorMessage");
    alert("Invalid mail or already used mail!");
  } else {
    document.getElementById("email").classList.remove("errorMessage");
    f = 1;
  }
  if (f === 1) {
    return true;
  } else {
    return false;
  }
};
export default validateEmail;
