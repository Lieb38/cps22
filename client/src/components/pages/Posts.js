import React from 'react'
import { fetchData, allPosts } from "../../main";
import { useState, useEffect, useContext, createContext } from "react";
import UserContext from "../../context/userContext";

export const Posts = () => {
  const {user} = useContext(UserContext);
  const signedUser = user.username;


  const [posts, setPosts] = useState([]);

useEffect(() => {
  fetch("/post/getPosts") // http://localhost:5000
  .then(response => response.json())
  .then(data => setPosts(data))
},[posts])

    return(
      <div className="postsSection" id="postsSection">

        {posts.reverse().map(post => {
          // deleteMe must be in posts.map to work for some reason
          const deleteMe = (e) => {
            e.preventDefault();
          
            fetchData('/post/delete', { id: post._id }, "DELETE")
            .then((data) => {
                if(!data.message) {
                    // console.log(post._id)
                    console.log(signedUser)
                    setPosts(posts)
                }
            })
            .catch((error) => {
                console.log(`Error! ${error.message}`)
            })
          }

          return(
                <div key={post._id} id={`postContainer`} className='postContainer'>
                  <form className="postForm mx-auto my-4" onSubmit={deleteMe}>
                    <h2 className="postyContent">{post.username} says {post.content}</h2>
                    <button type="submit" className="btn btn-outline-danger" id='DeleteME' >Delete</button>
                  </form>
                </div>
          ) }
          )}
      </div>
      

  )}

export default Posts;