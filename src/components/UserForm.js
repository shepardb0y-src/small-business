import { useState } from "react";
import axios from "axios";


const UserForm = ({ fetchData, editForm2, userToEdit,  }) => {
  console.log("userToEdit",userToEdit);
  const [firstname, setFirstName] = useState("");
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newClient = {
      firstname: firstname
    };
    try {
      if (editForm2) {
        // EDIT - UPDATING
        const response = await axios.put(
          `http://localhost:8080/api/v1/client/${userToEdit.id}`,
          newClient 
        );
      } else {
        // ADDING STUDENT
        const response = await axios.post(
          "http://localhost:8080/api/v1/adduser",
          newClient
        );

        if (response.status === 200) {
          setFirstName("");
         
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
          <label>First Name</label>
          <input
            type="text"
            name="first-name"
            placeholder={userToEdit.firstname}
            value={firstname}
            onChange={(e) => setFirstName(e.target.value)}
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
