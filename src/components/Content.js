// import React from 'react'

// const Content = (props) => {
//   return (
//       <div>
//           {posts ? (
//           // posts.length would also be a possibility instead of map
//           posts.map((post) =>
//             <div className="content" key={post.sys.id}>
//               <h2>{post.fields.title}</h2>
//               <img src={post.fields.image.fields?.file.url} alt="" width="500" height="400" />
//               <p>{post.fields.description}</p>
//               <p>More</p>
//             </div>
//           )
//         ) : (
//           "Loading..."
//         )}
//         {error && (
//           <h2>
//             Oh No! Something went wrong! This is the error:{" "}
//             {error.message}
//           </h2>
//         )}
//     </div>
//   )
// }

// export default Content