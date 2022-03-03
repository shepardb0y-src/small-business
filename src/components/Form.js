import { useState } from "react";
import axios from "axios";


const Form = ({ fetchClients, editForm, clienttToEdit }) => {
  console.log("clienttToEdit", clienttToEdit);

  const [userName, setUserName] = useState("");
  

  // console.log(firstName, lastName)

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newClient = {
      username: userName
    };
    try {
      if (editForm) {
        // EDIT - UPDATING
        const response = await axios.put(
          `http://localhost:8080/api/v1/client/${clienttToEdit.id}`,
          newClient
        );
      } else {
        // ADDING STUDENT
        const response = await axios.post(
          "http://localhost:8080/api/v1/addclients",
          newClient
        );

        if (response.status === 200) {
          setUserName("");
         
        }
      }

      fetchClients();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="ui centered grid">
      <form className="ui form" id="form-container" onSubmit={handleSubmit}>
        <div className="field">
          <label className="ui left aligned container">First Name</label>
          <input
            type="text"
            name="first-name"
            placeholder={clienttToEdit.username}
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
       
        <div className="ui right aligned container">
          <button className="ui button" type="submit">
            {editForm ? "Edit" : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
