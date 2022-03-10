import { useState } from "react";
import axios from "axios";
import Usercontext from "../context/UserContext";

const ClientForm = ({ fetchData, editForm, clienttToEdit,  }) => {
  console.log("clienttToEdit", clienttToEdit);
  const [userName, setUserName] = useState("");
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newClient = {
      username: userName
    };
    try {
      if (editForm) {
        // EDIT - UPDATING
        const response = await axios.put(
          `https://small-business-app.herokuapp.com/api/v1/client/${clienttToEdit.id}`,
          newClient 
        );
      } else {
        // ADDING STUDENT
        const response = await axios.post(
          "https://small-business-app.herokuapp.com/api/v1/addclients",
          newClient
        );

        if (response.status === 200) {
          setUserName("");
         
        }
      }

      fetchData();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div >
      <form  onSubmit={handleSubmit}>
        <div >
          <label>UserName</label>
          <input
            type="text"
            name="Useraname"
            placeholder={clienttToEdit.username}
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div>
          <button  type="submit">
            {editForm ? "Edit" : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ClientForm;
