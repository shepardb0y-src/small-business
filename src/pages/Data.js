import { useEffect, useState } from "react";
import axios from "axios";
import ClientForm from "../components/ClientForm";
import UserForm from "../components/UserForm";
import styled from 'styled-components'

const Tables = styled.div`
// display:flex;
// justify-content:center;
// align-items:center;
background-color:pink;
`


const Data = ({ user }) => {
  const [clients, setClients] = useState([]);
  const [editForm, setEditForm] = useState(false);
  const [clienttToEdit, setclienttToEdit] = useState({});
  const [users, setUsers] = useState([]);
  const [editForm2, setEditForm2] = useState(false);
  const [userToEdit, setUserToEdit] = useState({});

  useEffect(() => {
    fetchClients();
    fetchUsers();
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
  const fetchUsers = async () => {
    try {
      const response2 = await axios.get(
        "http://localhost:8080/api/v1/allusers"
      );

      console.log(response2);
      setUsers(response2.data);
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
  const deleteUser = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:8080/api/v1/user/${id}`
      );
      fetchUsers();
    } catch (err) {
      console.log(err);
    }
  };

  const handleEdit = (client) => {
    setEditForm(true);
    setclienttToEdit(client);
  };
  const handleEdit2 = (user) => {
    setEditForm(true);
    setclienttToEdit(user);
  };

  // console.log("this is our state", Data)
  return (
    <Tables>
      <ClientForm
        fetchClients={fetchClients}
        editForm={editForm}
        clienttToEdit={clienttToEdit}
        user={user}
      />
      <UserForm
        fetchUsers={fetchUsers}
        editForm2={editForm2}
        userToEdit={userToEdit}
        user={user}
      />
      <div>
      <table >
        <thead>
          <tr>
            <th>Client UserName/E-mail address</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => {
            return (
              <tr key={client.id}>
                <td data-label="username">{client.username}</td>

                <td data-label="Edit">
                  <button onClick={() => handleEdit(client)}>Edit</button>
                  <button onClick={() => deleteClient(client.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      </div>
<div>
  <table>
        <thead>
          <tr>
            <th>User Data </th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user.id}>
                <td data-label="username">{user.firstname}</td>

                <td data-label="Edit">
                  <button onClick={() => handleEdit2(user)}>Edit</button>
                  <button onClick={() => deleteUser(user.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
</div>
      
    </Tables>
  );
};

export default Data;
