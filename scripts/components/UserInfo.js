/**
 * 1. Repo component (name, html_url)
 * 2. fetch repos data
 * 3. render repos
 * 4. create input for filter repos
 * 5. handle filtering repos
 *
 *  1. Компонент репо
 * 2. получить данные репозитория
 * 3. визуализировать репозитории
 * 4. создать ввод для фильтрующих репозиториев
 * 5. обрабатывать репозитории с фильтрацией
 * магия закончилась)
 */

// import fetchData from '../api/fetchData.js';
// import RepoCard from './RepoCard.js';

const userInfo = document.querySelector('.content__user-info');

const UserInfo = (user) => {
  const {name, email, company, bio, avatar_url, public_repos} = user;

  // const reposData = await fetchData(repos_url);

  // const popupContent = document.querySelector('.popup__content');

  // const searchedString = '';

  // popupContent.addEventListener('', ())

  //  const filteredArr = reposData.filter((word => searchedString)

  // const cardList = reposData.reduce((acc, repo) => {
  //   acc += RepoCard(repo);
  //   return acc;
  // }, '');

  // const contentUserInfo = document.createElement('div');
  // contentUserInfo.className = 'user-info';

  // contentUserInfo.innerHTML = `<img class="user-info__image" src="${avatar_url}" alt="${name}"/>
  // <div class="user-info__details details">
  //   <h2 class="details__name">${name}</h2>
  //   ${bio ? `<p class="details__bio">${bio}</p>` : ''}
  //   ${email ? `<p class="details__email">${email}</p>` : ''}
  //   ${company ? `<p class="details__company">${company}</p>` : ''}
  //   <p class="details__repos">${public_repos} public repos</p>
  // </div>`;

  // const input = document.createElement('input');
  // input.placeholder = 'Filter repos by name';
  // input.type = 'text';

  // input.addEventListener('input', (e) => {
  //   console.log(e.target.value);
  // });

  // contentUserInfo.appendChild(input);

  // return contentUserInfo;

  userInfo.innerHTML = `<img class="user-info__image" src="${avatar_url}" alt="${name}"/>
            <div class="user-info__details details">
              <h2 class="details__name">${name}</h2>
              ${bio ? `<p class="details__bio">${bio}</p>` : ''}
              ${email ? `<p class="details__email">${email}</p>` : ''}
              ${company ? `<p class="details__company">${company}</p>` : ''}
              <p class="details__repos">${public_repos} public repos</p>
            </div>`;
};

export default UserInfo;
