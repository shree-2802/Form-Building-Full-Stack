const nameValidation = (name) => {
  const nameValidateRegex = /^[A-Za-z\s]+$/i;
  let f = 0;
  if (!nameValidateRegex.test(name)) {
    document.getElementById("fname").classList.add("errorMessage");
    alert("Invalid Name!");
  } else {
    document.getElementById("fname").classList.remove("errorMessage");
    f = 1;
  }
  if (f == 1) {
    return true;
  } else {
    return false;
  }
};
export default nameValidation;
