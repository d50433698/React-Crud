import React, { useState, useEffect } from 'react';
import UserService from '../services/userService';
import { useParams } from 'react-router';
import { Button, Card, Image } from 'semantic-ui-react';

export default function UserDetail() {
  let { id } = useParams();
  const [user, setUser] = useState([]);

  useEffect(() => {
    let userService = new UserService();
    userService.getUserById(id).then(response =>
      // console.log(response.data)
      setUser(response.data)
    );
  }, []);
  return (
    <div>
      User
      {user.map(user => (
        <div key={user.id}>
          <p>User Id: {user.id}</p>
          <p>User Name: {user.name}</p>
          <p>User Phone: {user.phone}</p>
          <p>
            User Address: {user.address.city} - {user.address.street} -
            {user.address.suite}
          </p>
          <p>
            User Email: {user.email}
          </p>
        </div>
      ))}
    </div>
  );
}
