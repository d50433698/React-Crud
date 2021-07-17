import React, { useState, useEffect } from 'react';
import UserService from '../services/userService';
import { useParams } from 'react-router';
import { Button, Card, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function UserDetail() {
  let { id } = useParams();
  const [user, setUser] = useState([]);

 

  function handleSubmit(e){
    let userService = new UserService();
    userService.addUser(e).then(response => console.log(response));
  }

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
        <div>
          <form onSubmit={handleSubmit(e)}>
            {' '}
            <div>
              <label>User Name: </label>
              <input type="text" />{' '}
            </div>
            <div>
              <label>User Phone: </label> <input type="text" />{' '}
            </div>
            <div>
              <label>User Adress: </label> <input type="text" />{' '}
            </div>
            <div>
              <label>Company Name: </label> <input type="text" />{' '}
            </div>
            <Link to={{ pathname: `/` }}>
              <button type="button" class="btn btn-info">
                Edit
              </button>{' '}
            </Link>
          </form>
        </div>
      
    </div>
  );
}
