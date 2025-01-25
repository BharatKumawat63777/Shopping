import React from "react";

const Shoppingitem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date } = props;
  return (
    <div className="my-3">
      <div className="card" style={{ width: "20rem" }}>
        <img
          style={{ height: "15rem" }}
          src={
            imageUrl
              ? imageUrl
              : "https://th.bing.com/th/id/OIP.1_ceod8DjeoFC6ZlNePvVwAAAA?w=229&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7"
          }
          className="card-img-top"
          alt="..."
        />
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          best news
          <span className="visually-hidden">unread messages</span>
        </span>
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text">
            <small className="text-body-secondary">
              By {!author ? "Unknown" : author} on{" "}
              {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            href={newsUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm btn-warning"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Shoppingitem;
