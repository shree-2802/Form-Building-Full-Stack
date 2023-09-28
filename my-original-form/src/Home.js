import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import divLogo from "./DivumLogo.jpeg";
import "./Home.css";
import addressValidation from "./addressValidation";
import dobValidation from "./dobValidation";
import validateEmail from "./emailValidation";
import empty from "./empty";
import mobileNumberValidation from "./mobileNumberValidation";
import nameValidation from "./nameValidation";
function Home() {
  let [emailInput, setEmailInput] = useState("");
  let [fnameInput, setFnameInput] = useState("");
  let [lnameInput, setLnameInput] = useState("");
  let [mobileInput, setMobileInput] = useState("");
  let [dobInput, setDobInput] = useState("");
  let [addInput, setAddInput] = useState("");
  const navigate = useNavigate();
  /* const [array1, setArray1] = useState([]);*/
  const alertFunction = () => {
    alert("Do you wanna submit");
  };
  const update = async () => {
    try {
      const response = await fetch(`http://localhost:4000/sample/${id}`, {
        method: "GET",
      });
      const jsonData = await response.json();
      setValues(jsonData);
    } catch (err) {
      console.log(err.message);
    }
  };
  const setValues = (jsonData) => {
    document.getElementById("email").value = jsonData[0].mailid;
    document.getElementById("fname").value = jsonData[0].fname;
    document.getElementById("lname").value = jsonData[0].lname;
    document.getElementById("mobile").value = jsonData[0].mobile;
    document.getElementById("dob").value = jsonData[0].dob.slice(0, 10);
    // console.log(JSON.parse(jsonData[0].dob));
    document.getElementById("add").value = jsonData[0].address;
  };
  const changes = () => {
    debugger
    console.log("changes" + document.getElementById("email").value);
    Value(document.getElementById("email").value, 1);
    Value(document.getElementById("fname").value, 2);
    Value(document.getElementById("lname").value, 3);
    Value(document.getElementById("mobile").value, 4);
    Value(document.getElementById("dob").value, 5);
    Value(document.getElementById("add").value, 6);
    // console.log(document.getElementById("dob").value);
  };

  let { id } = useParams();
  if (id != null) {
    useEffect(() => {
      update();
    }, []);
  }
  const Value = (val, num) => {
    debugger
    switch (num) {
      case 1:
        if (validateEmail(val)) {
          setEmailInput(val);
          console.log("entered " + num, val);
          console.log("val " + emailInput);
          // document.getElementById("fname").focus();
        }
        break;
      case 2:
        if (nameValidation(val)) {
          setFnameInput(val);
          console.log("entered " + num, val);
          console.log("hii");
          // document.getElementById("lname").focus();
        }
        break;
      case 3:
        if (nameValidation(val)) {
          console.log("hii");
          setLnameInput(val);
          console.log("entered " + num, val);
          // document.getElementById("mobile").focus();
        }
        break;
      case 4:
        if (mobileNumberValidation(val)) {
          setMobileInput(val);
          // document.getElementById("dob").focus();
        }
        break;
      case 5:
        if (dobValidation(val)) {
          console.log(val);
          val.slice(0, 10);
          console.log(val, typeof val);
          setDobInput(val);
          // document.getElementById("add").focus();
        } else {
          alert("Invalid date input");
        }
        break;
      case 6:
        if (addressValidation(val)) {
          setAddInput(val);
          // document.querySelector(".submitBtn").focus();
        }
        break;
    }
  };

  const complete = async (event) => {
    debugger
    event.preventDefault();
   changes();
    console.log(
      emailInput,
      fnameInput,
      lnameInput,
      mobileInput,
      dobInput,
      addInput
    );
    if (id != null) {
      console.log("noo");
      if (
        emailInput &&
        fnameInput &&
        lnameInput &&
        mobileInput &&
        dobInput &&
        addInput
      ) {
        const body = {
          emailInput,
          fnameInput,
          lnameInput,
          mobileInput,
          dobInput,
          addInput,
        };
        console.log(
          // emailInput,
          // fnameInput,
          // lnameInput,
          // mobileInput,
          // dobInput,
          // addInput
          "body" + body
        );
        try {
          const response = fetch(`http://localhost:4000/sample/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
          });
          console.log(
            "worked" + emailInput,
            fnameInput,
            lnameInput,
            mobileInput,
            dobInput,
            addInput
          );
        } catch (err) {
          alert(err.message);
          return;
        }
        alert("changes updated");
        navigate("/table");
        id = null;
      } else {
        alert("Fill all Fields");
      }
    } else {
      if (
        emailInput &&
        fnameInput &&
        lnameInput &&
        mobileInput &&
        dobInput &&
        addInput
      ) {
        try {
          console.log("11");
          const body = {
            emailInput,
            fnameInput,
            lnameInput,
            mobileInput,
            dobInput,
            addInput,
          };
          const response = await fetch("http://localhost:4000/sample", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
          });
          console.log(response);
          navigate("/table");
          empty();
        } catch (err) {
          alert(err.message);
        }
      } else {
        alert("Fill all fields lol");
      }
    }
  };
  return (
    <div className="body1">
      <div className="entireContent">
        <div className="header1">
          <div>
            <img src={divLogo} className="divLogo"></img>
          </div>
          {/*Shiv*/}

          <div>
            <button
              className="tableViewButton"
              onClick={() => {
                navigate("/table");
              }}
            >
              View Table
            </button>
          </div>
        </div>

        <div className="content">
          {/*Parvathi*/}
          <div className="form">
            <div className="innerContent">
              <div className="division">
                <label className="label">Email</label>
              </div>
              <div className="division">
                <input
                  className="inputBox"
                  type="text"
                  id="email"
                  placeholder="Email"
                  maxLength={254}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      event.preventDefault();
                      console.log(
                        "111" + document.getElementById("email").value
                      );
                      {
                        Value(document.getElementById("email").value, 1);
                      }
                    }
                  }}
                ></input>
              </div>
            </div>
            <div className="innerContent">
              <div className="division">
                <label className="label">First Name</label>
              </div>
              <div className="division">
                <input
                  className="inputBox"
                  id="fname"
                  type="text"
                  placeholder="First Name"
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      event.preventDefault();
                      console.log(event.target.value);
                      {
                        Value(event.target.value, 2);
                      }
                    }
                  }}
                ></input>
              </div>
            </div>
            <div className="innerContent">
              <div className="division">
                <label className="label">Last Name</label>
              </div>
              <div className="division">
                <input
                  className="inputBox"
                  id="lname"
                  type="text"
                  placeholder="Last Name"
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      console.log(event.target.value);
                      {
                        Value(event.target.value, 3);
                      }
                    }
                  }}
                ></input>
              </div>
            </div>
            <div className="innerContent">
              <div className="division">
                <label className="label">Mobile</label>
              </div>
              <div className="division">
                <input
                  className="inputBox"
                  id="mobile"
                  type="text"
                  placeholder="Mobile"
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      console.log(event.target.value);
                      {
                        Value(event.target.value, 4);
                      }
                    }
                  }}
                ></input>
              </div>
            </div>
            <div className="innerContent">
              <div className="division">
                <label className="label">DOB</label>
              </div>
              <div className="division">
                <input
                  className="inputBox"
                  type="date"
                  id="dob"
                  placeholder="Datie of Birth"
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      event.preventDefault();
                      console.log(typeof event.target.value);
                      {
                        Value(event.target.value, 5);
                      }
                    }
                  }}
                ></input>
              </div>
            </div>
            <div className="innerContent">
              <div className="division">
                <label className="label">Address</label>
              </div>
              <div className="division">
                <input
                  className="inputBox"
                  id="add"
                  type="text"
                  placeholder="Address"
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      console.log(event.target.value);
                      {
                        Value(event.target.value, 6);
                      }
                    }
                  }}
                ></input>
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          {/*Vishnu*/}
          <div>
            <button
              className="submitBtn"
              onClick={() => {
                [alertFunction(), complete(event)];
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;

/*const Value1 = (val) => {
    emailInput = val;
    setEmailInput(emailInput);
    console.log(emailInput);
  };
  const Value2 = (val) => {
    fnameInput = val;
    // setFnameInput(fnameInput);
    console.log(fnameInput);
  };
  const Value3 = (val) => {
    lnameInput = val;
    // setLnameInput(lnameInput);
    console.log(lnameInput);
  };
  const Value4 = (val) => {
    mobileInput = val;
    // setMobileInput(mobileInput);
    console.log(mobileInput);
  };
  const Value5 = (val) => {
    dobInput = val;
    // setDobInput(dobInput);
    console.log(dobInput);
  };
  const Value6 = (val) => {
    addInput = val;
    // setAddInput(addInput);
    console.log(addInput);
  };*/
// const navigate = useNavigate();
// const Change = () => {
//   navigate("table");
// };
// let emailInput,
//   fnameInput,
//   lnameInput,
//   mobileInput,
//   dobInput,
//   addInput = "",

// if (
//   emailInput &&
//   fnameInput &&
//   lnameInput &&
//   mobileInput &&
//   dobInput &&
//   addInput
// ) {
//   console.log(array1.length);
//   array1.push({
//     ...array1,
//     id: array1.length,
//     mail: emailInput,
//     fname: fnameInput,
//     lname: lnameInput,
//     mobile: mobileInput,
//     dob: dobInput,
//     add: addInput,
//   });
//   setArray1(array1);
//   console.log(JSON.stringify(array1));
// empty();
//       emailInput,
//         fnameInput,
//         lnameInput,
//         mobileInput,
//         dobInput,
//         (addInput = "");
//       Navigation;
//       <MenuPage />;
//     } else {
//       alert("Please fill all fields");
//     }

//Dhinesh
// 42/8 5 2
// 343/8 = 7
// 23-16=7