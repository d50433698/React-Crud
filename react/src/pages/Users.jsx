import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import UserService from '../services/userService';

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    let userService = new UserService();
    userService.getUsers().then(response => setUsers(response.data));
    let userData = users;
    console.log(userData);
  }, []);

  function handleDelete(i) {
    let userService = new UserService();
    userService.deleteUserById(i).then(response => console.log(response));
  }

  return (
    <div>
      <Link to={{ pathname: `/adduser` }}>
        <button type="button" class="btn btn-info">
          Add User
        </button>
      </Link>
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">User Id</th>
            <th scope="col">Name</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <th scope="row">{user.id}</th>
              <td>
                <Link to={{ pathname: `/user/${user.id}` }}>{user.name}</Link>
              </td>
              <td>
                <button
                  onClick={handleDelete(user.id)}
                  type="button"
                  class="btn btn-danger"
                >
                  Delete
                </button>
              </td>
              <td>
                <Link to={{ pathname: `/useredit/` + user.id }}>
                  <button type="button" class="btn btn-warning">
                    Update
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
