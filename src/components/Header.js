import React from "react";
import { Link } from "react-router-dom";

const Header = ({ post }) => {
  //  const newestPost = posts.push(posts.length - 1);
  //  const newestPost = posts.push(
  //    (post) => student.login.uuid === id
  //  );
  // console.log(post);
  return (
    <div className="header">
      <img
        src={post.fields.image.fields.file.url}
        alt=""
        width="300"
        height="400"
      />
      <Link to={`../${post.sys.id}`}>
        <h2>{post.fields.shortDescription}</h2>
      </Link>
      <hr class="solid"></hr>
    </div>
  );
};

export default Header;
