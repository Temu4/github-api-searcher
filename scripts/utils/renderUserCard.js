/**
 * {
 * avatar_url
 * login
 * url
 * }
 */
const renderUserCard = (user) => {
  const {avatar_url, login, html_url, repos_url} = user;

  return `<li class="list__item">
              <div class="card">
                  <img class="card__img" src="${avatar_url}" alt="${login}" />
                    <h3 class="card__name">${login}</h3>
                </div>
            </li>`;
};

export default renderUserCard;
