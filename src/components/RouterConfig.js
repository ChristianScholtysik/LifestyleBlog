import React from "react";
import { Route, Routes } from "react-router-dom";
import PostDetails from "./PostDetails";
import PostsPreview from "./PostsPreview";

const RouterConfig = ({ posts }) => {
  return (
    <Routes>
      <Route path="/" element={<PostsPreview posts={posts} />} />
      <Route path="/:id" element={<PostDetails posts={posts} />} />
    </Routes>
  );
};
export default RouterConfig;
