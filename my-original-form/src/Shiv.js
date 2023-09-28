import React, { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DivumLogo from "./DivumLogo.jpeg";
import "./Shiv.css";
export function Details() {
  const [listVal, setListVal] = useState([]);
  const navigate = useNavigate();

  const list = async () => {
    try {
      const response = await fetch("http://localhost:4000/sample");
      const jsonData = await response.json();
      setListVal(jsonData);
      console.log(jsonData);
    } catch (err) {
      console.log(err.message);
    }
  };
  const deleteValue = async (id) => {
    try {
      const response = await fetch(`http://localhost:4000/sample/${id}`, {
        method: "DELETE",
      });
      setListVal(listVal.filter((listVal) => listVal.id !== id));
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    list();
  }, []);
  console.log(listVal);
  return (
    <Fragment>
      <div className="mainBody">
        <div className="container">
          <div className="header">
            <div>
              <img className="img1" src={DivumLogo} alt="DIVUM" />
            </div>
            <div>
              <button
                className="addUser"
                onClick={() => {
                  navigate("/");
                }}
              >
                Add user
              </button>
            </div>
          </div>
          <div className="content">
            <table className="table1">
              <thead className="heading">
                <tr className="row1">
                  <th>Email</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Mobile</th>
                  <th>DOB</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody className="bodyTable">
                {listVal.map((value) => (
                  <tr key={value.id}>
                    <td>{value.mailid}</td>
                    <td>{value.fname}</td>
                    <td>{value.lname}</td>
                    <td>{value.mobile}</td>
                    <td>{(value.dob).slice(0,10)}</td>
                    <td>
                      {/*<Link to={`/update/${value.id}`}>update</Link>*/}
                      <button
                        className="updateButton"
                        onClick={() => {
                          navigate(`/update/${value.id}`);
                        }}
                      >
                        Update
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() => {
                          deleteValue(value.id);
                        }}
                        className="deleteButton"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
function update() {}
// export default function listDisp(array1) {
//   let todoHtml = "";
//   for (let i = 0; i < array1.length; i++) {
//     todoHtml += `
//     <div>
//       <p class='base'>${array1[i].email}</p>
//     </div>
//     <div>
//     <p class='base'>${array1[i].fname}</p>
//     </div>
//     <div>
//     <p class='base'>${array1[i].lname}</p>
//     </div>
//     <div>
//     <p class=base>${array1[i].mobile}</p>
//     </div>
//       <p class=base>${array1[i].dob}</p>
//     <div>
//     <button class='edit' onclick=''>Edit<button>
//         <button class="del" onclick='array1.splice(${i},1);listDisp();'>Delete</button>
//     </div>`;
//   }
//   document.getElementById("cont").innerHTML = todoHtml;
// }
