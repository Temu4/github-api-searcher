const RepoCard = ({name, html_url}) => {
  return `<li class="repo_list_item">
			      <a class="repo_link" href="${html_url}" target="blank">${name}</a>
          </li>`;
};

export default RepoCard;
