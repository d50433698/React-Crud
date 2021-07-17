import axios from 'axios';
import React from 'react';

export default class UserService {
  getUsers() {
    return axios.get('https://jsonplaceholder.typicode.com/users');
  }

  getUserById(userId) {
    return axios.get('https://jsonplaceholder.typicode.com/users?id=' + userId);
  }

  deleteUserById(userId) {
    return axios.post('https://jsonplaceholder.typicode.com/posts/' + userId);
  }

  updateUser(user) {
    return axios.post('https://jsonplaceholder.typicode.com/posts/' + user);
  }

  addUser(user) {
    return axios.post('https://jsonplaceholder.typicode.com/posts/' + user);
  }
}
