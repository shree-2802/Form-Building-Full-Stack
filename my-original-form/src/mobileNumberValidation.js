const mobileNumberValidation = (number) => {
  number = Number(number);
  let f = 0;
  const mobileRegex = /^[1-9]{1}[0-9]{9}$/i;
  if (!mobileRegex.test(number)) {
    document.getElementById("mobile").classList.add("errorMessage");
    alert("Invalid mobile number!");
  } else {
    document.getElementById("mobile").classList.remove("errorMessage");
    f = 1;
  }
  if (f == 1) {
    return true;
  } else {
    return false;
  }
};
export default mobileNumberValidation;
