/**
 * 1. Form handling -> search query
 * 2. Request to api
 * 3. Handle server response -> data
 * 4. Render users list
 */
import api from './api/index.js';
import addCardToList from './components/UsersList.js';

const {searchUsers, fetchData} = api;

const searchUsersForm = document.forms['search-users'];
const usersList = document.getElementById('usersList');

searchUsersForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const query = event.target.elements.username.value;

  console.log(query);

  const users = await searchUsers(query);

  console.log(users);

  addCardToList(users);
});

usersList.addEventListener('click', async (e) => {
  e.preventDefault();

  if (!e.target.classList.contains('card') && !e.target.parentNode.classList.contains('card')) {
    return;
  }

  const userLink = e.target.href || e.target.parentNode.href;
  const userData = await fetchData(userLink);

  console.log(userData);
});
