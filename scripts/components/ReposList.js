import RepoCard from './RepoCard.js';

const reposList = document.querySelector('.repos-list');

const ReposList = (repos) => {
  if (!repos.length) {
    reposList.innerHTML = 'No repos for searched query';
    return;
  }

  reposList.innerHTML = repos.reduce((acc, repo) => {
    acc += RepoCard(repo);
    return acc;
  }, '');
};

export default ReposList;
