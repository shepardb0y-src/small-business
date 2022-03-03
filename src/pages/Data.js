import { useEffect, useState } from "react";
import axios from "axios";
import Form from "../components/Form";

const Data = ({user}) => {
  const [clients, setClients] = useState([]);
  const [editForm, setEditForm] = useState(false);
  const [clienttToEdit, setclienttToEdit] = useState({});

  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/v1/allclients"
      );

      console.log(response);
      setClients(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteClient = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:8080/api/v1/client/${id}`
      );
      fetchClients();
    } catch (err) {
      console.log(err);
    }
  };

  const handleEdit = (client) => {
    setEditForm(true);
    setclienttToEdit(client);
  };

  // console.log("this is our state", Data)
  return (
    <>
      <Form
        fetchClients={fetchClients}
        editForm={editForm}
        clienttToEdit={clienttToEdit}
        user={user}
      />

      <table className="ui celled table">
        <thead>
          <tr>
            <th>UserName</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => {
            return (
              <tr key={client.id}>
                <td data-label="username">{client.username}</td>

                <td data-label="Edit">
                  <button
                   
                    onClick={() => handleEdit(client)}
                  >Edit</button>
                  <button
                   
                    onClick={() => deleteClient(client.id)}
                  >Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Data;
