/**
 * {
 * avatar_url
 * login
 * url
 * }
 */
const UserCard = (user) => {
  const {avatar_url, login, url, id} = user;

  return `<li class="list__item" data-id="${id}">
              <a class="card" href="${url}" >
                <img class="card__img" src="${avatar_url}" alt="${login}" />
                <p class="card__name">${login}</p>
              </a>
            </li>`;
};

export default UserCard;
