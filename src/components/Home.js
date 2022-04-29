import React from 'react'
import { useState, useEffect } from 'react';
import { client } from "../client";

const Home = () => {
  const [data, setData] = useState();

client.getEntries()
.then((response) => console.log(response.items))
.catch(console.error)
  return (
    <div className='App'>
      <div className='container'>
        <header>
          <div className='navWrapper'></div>
        </header>
        <main>
          <div className='contentWrapper'></div>
</main>
      </div>
    </div>
  )
}

export default Home;
