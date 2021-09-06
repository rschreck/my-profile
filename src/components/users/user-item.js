import React from "react";

function UserItem({
  user = {
    avatar_url: "https://avatars.githubusercontent.com/u/44672855?v=4",
    login: "rschreck",
    html_url: "https://github.com/rschreck",
  },
}) {
  const {
    avatar_url = "https://avatars.githubusercontent.com/u/44672855?v=4",
    login = "rschreck",
    html_url = "https://github.com/rschreck",
  } = user;
  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        className="round-img"
        alt={login}
        style={{ width: "60px" }}
      />
      <h3>{login}</h3>
      <div>
        <a href={html_url} className="btn btn-dark btn-sm my-1">
          More
        </a>
      </div>
    </div>
  );
}
export { UserItem };
