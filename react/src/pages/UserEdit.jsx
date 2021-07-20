import React, { useState, useEffect } from 'react';
import UserService from '../services/userService';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

export default function UserEdit() {
  let { id } = useParams();
  const [user, setUser] = useState([]);
 
   
 
 

  function handleSubmit(event){
    event.preventDefault();
    const data = new FormData(event.target);
    let userService = new UserService();
    userService.updateUser(data).then(response => console.log(response));
  }

  useEffect(() => {
    handleSubmit = handleSubmit.bind(this);
    let userService = new UserService();
    userService.getUserById(id).then(response =>
      setUser(response.data)
    );
    console.log(user);
  }, []);
  return (
    <div>
      User
        <div>
          <form onSubmit={handleSubmit}>
            {' '}
            <div>
              <label>User Name: </label>
              <input type="text" id="name" placeholder={user.name} name="name" />{' '}
            </div>
            <div>
              <label>User Phone: </label>
               <input type="text" id="phone" name="phone" />{' '}
            </div>
            <div>
              <label>User Adress: </label> 
              <input type="text" />{' '}
            </div>
            <div>
              <label>Company Name: </label> 
              <input type="text" id="company" name="company"/>{' '}
            </div>
            <div>
              <label>Email: </label> 
              <input type="text" id="email" name="email"/>{' '}
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
