import React from 'react'
import { fetchData, allPosts } from "../../main";
import { useState, useEffect, useContext, createContext } from "react";
//import { useNavigate, useLocation } from "react-router-dom";
import UserContext from "../../context/userContext";

export const Posts = () => {
  const {user} = useContext(UserContext);



  const [posts, setPosts] = useState([]);


useEffect(() => {
  fetch("/post/getPosts") // http://localhost:5000
  .then(response => response.json())
  .then(data => setPosts(data))
},[])

// const deleteMe = (e, _id) => {
//   e.preventDefault();

//   fetchData('/post/delete', 
//         {
//         _id: _id
//         }, 
//       "DELETE")
//       .then((data) => {
//           if(!data.message) {
//               console.log(_id)
//               console.log(data)
//               // console.log(`success!!"`)
//           }
//       })
//       .catch((error) => {
//           console.log(`Error! ${error.message}`)
//       })


//     //   fetch("/getPosts") // http://localhost:5000/post
//     // .then(response => response.json())
//     // .then(data => setPosts(data))
// }

    return(
      <div className="postsSection" id="postsSection">

                {posts.map(post => {
                  
                  const deleteMe = (e, _id) => {
                    e.preventDefault();
                  
                    fetchData('/post/delete', 
                          {
                          _id: _id
                          }, 
                        "DELETE")
                        .then((data) => {
                            if(!data.message) {
                                console.log(_id)
                                console.log(data)
                                // console.log(`success!!"`)
                            }
                        })
                        .catch((error) => {
                            console.log(`Error! ${error.message}`)
                        })
                  
                  
                      //   fetch("/getPosts") // http://localhost:5000/post
                      // .then(response => response.json())
                      // .then(data => setPosts(data))
                  }



                    return(
                        <div key={post._id} id={`postContainer ${post._id}`} className='postContainer'>
                          <form className="Posties" onSubmit={(e) => deleteMe(e,post._id)}>
                            {/* onClick={() => deleteMe(post._id)} */}
                            <h1 className="postyContent">{post.content}</h1>
                            <h2>{user.username}</h2>
                            <button type="submit" className="btn"  id='DeleteME' >Delete</button>
                          </form>
                        </div>
                    )}
                )}
      </div>
      

  )}

export default Posts;