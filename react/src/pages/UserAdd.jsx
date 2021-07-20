import React, { useState, useEffect } from 'react';
import UserService from '../services/userService';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { Button, Card, Image } from 'semantic-ui-react';


export default function UserAdd() {
  const [users, setUsers] = useState([]);
  function handleSubmit(e){
    event.preventDefault();
    const data = new FormData(event.target);
    let userService = new UserService();
    userService.addUser(e).then(response => console.log(response));
  }
  useEffect(() => {}, []);
  return (
    <div>
      User
      <div>
        <form onSubmit={handleSubmit}>
          {' '}
          <div>
            <label>User Name: </label>
            <input type="text" name="name" />{' '}
          </div>
          <div>
            <label>User Phone: </label> <input type="text" name="phone" />{' '}
          </div>
          <div>
            <label>User Adress: </label>{' '}
            <input type="text" name="address.city" />{' '}
          </div>
          <div>
            <label>Company Name: </label> <input type="text" name="company" />{' '}
          </div>
          <div>
            <label>Email: </label> <input type="text" name="email" />{' '}
          </div>
          <Link to={{ pathname: `/` }}>
            <button type="submit" class="btn btn-info">
              Add User
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}
