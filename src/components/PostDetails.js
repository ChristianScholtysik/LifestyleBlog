import React from "react";
import { useParams } from "react-router-dom";

const PostDetails = ({ posts }) => {
  const { id } = useParams();
  const selectedPost = posts.find((post) => post.sys.id === id);
  console.log(selectedPost);
  return (
    <div>
      {selectedPost && (
        <div>
          <h2>{selectedPost.fields.title}</h2>
          <img
            src={selectedPost.fields.image.fields?.file.url}
            alt={selectedPost.sys.id}
            width="500"
            height="400"
          />
          <p>{selectedPost.fields.description}</p>
        </div>
      )}
    </div>
  );
};

export default PostDetails;
