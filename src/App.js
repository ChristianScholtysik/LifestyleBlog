import React from 'react'
import { useState, useEffect } from 'react';
import { client } from "./client";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState();
  console.log(posts);

  useEffect(() => {
  client.getEntries()
  .then((response) => {
    console.log(response.items);
    setPosts(response.items);
  })
      .catch((error)=> setError(error));
   }, []);
  return (
    <div className="App">
      <header>
        <h1>Welcome to CD LIFESTYLE</h1>
      </header>
      <main>
        {posts ? (
          // posts.length would also be a possibility instead of map
          posts.map((post) =>
            <div className="content" key={post.sys.id}>
              <h2>{post.fields.title}</h2>
              <img src={post.fields.image.fields?.file.url} alt="" width="500" height="400" />
              <p>{post.fields.description}</p>
              <p>More</p>
            </div>
          )
        ) : (
          "Loading..."
        )}
        {error && (
          <h2>
            Oh No! Something went wrong! This is the error:{" "}
            {error.message}
          </h2>
        )}
      </main>
    </div>
  );
}

export default App
