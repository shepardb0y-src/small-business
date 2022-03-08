import { useState } from "react";
import axios from "axios";
import React from "react";
import { useContext } from "react";
import Usercontext from "../context/UserContext";


const UserForm = ({ fetchData, editForm2, userToEdit, }) => {
  console.log("userToEdit",userToEdit);
  const user = useContext(Usercontext);
  
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
      firstname: state.firstname,
      lastname: state.lastname,
      streetname: state.streetname,
      stateLocation: state.stateLocation,
      zipcode: state.zipcode,
      comments: state.comments
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
          newClient
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
  console.log(state.lastname)
  console.log(state.streetname)
  console.log(state.stateLocation)
  console.log(state.comments)
  console.log(state.firstname)
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
           <label>Last Name</label>
          <input
            type="text"
            placeholder={userToEdit.lastname}
            value={state.lastname}
          name="lastname" onChange={handleChange}
          />
           <label>Street Name</label>
          <input
            type="text"
            placeholder={userToEdit.streetname}
            value={state.streetname}
          name="streetname" onChange={handleChange}
          />
           <label>State</label>
          <input
            type="text"
            placeholder={userToEdit.stateLocation}
            value={state.stateLocation}
          name="stateLocation" onChange={handleChange}
          />
           <label>Zipcode</label>
          <input
            type="text"
            placeholder={userToEdit.zipcode}
            value={state.zipcode}
          name="zipcode" onChange={handleChange}
        
          />
           <label>Comments</label>
          <input
            type="text"
            placeholder={userToEdit.comments}
            value={state.comments}
          name="comments" onChange={handleChange}
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
