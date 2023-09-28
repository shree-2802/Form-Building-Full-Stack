const dobValidation = (date) => {
  const d = new Date();
  console.log("type " + typeof date);
  if (date == "") {
    alert("Invalid date input");
    document.getElementById("dob").classList.add("errorMessage");
    return false;
  } else {
    let value = Number(date.charAt(8) + date.charAt(9));
    let year = Number(
      date.charAt(0) + date.charAt(1) + date.charAt(2) + date.charAt(3)
    );
    let month = Number(date.charAt(5) + date.charAt(6));

    let today = d.getDate();
    let montht = d.getMonth() + 1;
    let yeart = d.getFullYear();
    console.log(yeart, montht, today);
    if (year <= yeart) {
      if (year === yeart) {
        if (month <= montht) {
          if (month == montht) {
            if (value <= today) {
              document.getElementById("dob").classList.remove("errorMessage");
              return true;
            } else {
              document.getElementById("dob").classList.add("errorMessage");
              return false;
            }
          } else {
            document.getElementById("dob").classList.remove("errorMessage");
            return true;
          }
        } else {
          document.getElementById("dob").classList.add("errorMessage");
          return false;
        }
      } else {
        document.getElementById("dob").classList.remove("errorMessage");
        return true;
      }
    } else {
      document.getElementById("dob").classList.add("errorMessage");
      return false;
    }
  }
};
export default dobValidation;
