import { useState } from "react";
import axios from "axios";
import React from "react";


const UserForm = ({ fetchData, editForm2, userToEdit, }) => {
  console.log("userToEdit",userToEdit);
  
  const [state, setState] = React.useState({
    firstname: "",
    lastname: "",
    streetname:"",
    stateLocation:"",
    zipcode: "",
    comments:""
  })
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newClient = {
      firstname: state.firstname
    };
    try {
      if (editForm2) {
        // EDIT - UPDATING
        const response = await axios.put(
          `http://localhost:8080/api/v1/user/${userToEdit.id}`,
          newClient 
        );
      } else {
        // ADDING STUDENT
        const response = await axios.post(
          "http://localhost:8080/api/v1/adduser",
          newClient, console.log()
        );

        // if (response.status === 200) {
        //   setState("");
         
        // }
      }

      fetchData();
    } catch (err) {
      console.log(err);
    }
  };
  function handleChange(e) {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value
    });
  }
  return (
    <div >
      <form  onSubmit={handleSubmit}>
        <div >
          <label>First Name</label>
          <input
            type="text"
            placeholder={userToEdit.firstname}
            value={state.firstname}
          name="firstname" onChange={handleChange}
          />
        </div>
        <div>
          <button  type="submit">
            {editForm2 ? "Edit" : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
