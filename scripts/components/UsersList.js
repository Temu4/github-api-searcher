import UserCard from './UserCard.js';

const usersList = document.getElementById('usersList');

const UsersList = (users) => {
  if (!users.length) {
    usersList.innerHTML = 'No user for searched query';
    return;
  }

  usersList.innerHTML = users.reduce((acc, user) => {
    acc += UserCard(user);
    return acc;
  }, '');
};

export default UsersList;
