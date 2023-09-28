const addressValidation = (address) => {
  const addressRegex = /[A-Za-z0-9'\.\-\s\,]/;
  let f = 0;
  if (!addressRegex.test(address)) {
    document.getElementById("add").classList.add("errorMessage");
    alert("Invalid Address");
  } else {
    document.getElementById("add").classList.remove("errorMessage");
    f = 1;
  }
  if (f == 1) {
    return true;
  } else {
    return false;
  }
};
export default addressValidation;
