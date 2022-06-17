/**
 * 1. Form handling -> search query
 * 2. Request to api
 * 3. Handle server response -> data
 * 4. Render users list
 */
import api from './api/index.js';
import addCardToList from './components/UsersList.js';
import UserInfo from './components/UserInfo.js';
import ReposList from './components/ReposList.js';

const popup = document.querySelector('.popup');

const hidePopup = () => {
  popup.classList.add('hidden');
  document.body.classList.remove('popup-shown');
};

const showPopup = () => {
  popup.classList.remove('hidden');
  document.body.classList.add('popup-shown');
};

popup.addEventListener('click', (e) => {
  if (e.target.classList.contains('popup')) {
    hidePopup();
    return;
  }
});

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
  const {repos_url, ...userData} = await fetchData(userLink);

  UserInfo(userData);

  const reposData = await fetchData(repos_url);
  ReposList(reposData);

  const popupInput = document.querySelector('#repoName');
  popupInput.addEventListener('input', (e) => {
    const value = e.target.value;
    console.log(value);
    const filteredReposData = reposData.filter((repo) =>
      repo.name.toLowerCase().includes(value.toLowerCase())
    );

    ReposList(filteredReposData);
  });

  showPopup();
});
