import React from "react";
import PropTypes from "prop-types";

function UserItem({
  user = {
    avatar_url: "https://avatars.githubusercontent.com/u/44672855?v=4",
    login: "rschreck",
    html_url: "https://github.com/rschreck",
    followers_url: "",
  },
}) {
  const {
    avatar_url = "https://avatars.githubusercontent.com/u/44672855?v=4",
    login = "rschreck",
    html_url = "https://github.com/rschreck",
    type = "User",
    followers_url = "https://github.com/rschreck/followers",
  } = user;

  return (
    <div className="card bg-light">
      <h3 className="text-primary text-left">
        <img
          src={avatar_url}
          className="round-img"
          alt={login}
          style={{ width: "60px" }}
        />

        <span
          style={{ float: "right" }}
          className={
            "badge " +
            (type === "Organization" ? "badge-success" : "badge-primary")
          }
        >
          {type}
        </span>
      </h3>
      <div className="text-primary text-left">
        <p>{login}</p>
        <a href={html_url} className="btn btn-dark btn-sm my-1">
          More...
        </a>
        <ul className="list">
          {followers_url && (
            <li className="fas fa-envelope-open">{followers_url}</li>
          )}
        </ul>
      </div>
      <p>
        <button className="btn btn-dark btn-sm">Edit</button>
        <button className="btn btn-danger btn-sm">Delete</button>
      </p>
    </div>
  );
}
UserItem.prototypes = {
  user: PropTypes.object.isRequired,
};
export { UserItem };
