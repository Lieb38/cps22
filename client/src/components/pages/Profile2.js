// import { fetchData, fetchPosts } from "../../main";
// import { useState, useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// //import { ProfileComp } from "./profileComp";

// //const Profile = () => {
//     const { state } = useLocation();
//     const userName = state.username;
//     const userId = state._id;


   
//     const createPost = () => {
//         const newPost = document.getElementById('postsSection');
//         let textBox = document.createElement('h3');
//         textBox.innerHTML = (`${userName} says: ${content}`)
//         newPost.appendChild(textBox);
//     }


//     // useEffect(() => {
//     //     effect
//     //     return () => {
//     //         cleanup
//     //     };
//     // }, [input]);

// /////////////
//     const [posts, setPosts] = useState([]);
    
//     useEffect(() => {
//         fetch("http://localhost:5000/post/getPosts")
//         .then((response) => {
//         return response.json();
//         })
//         .then((data) => {   
//             setPosts(data);
//         });
        
//     })

//     /////////////
//     const [post, setPost] = useState ({
//         username: userName,
//         content: ''
//     });
//     // destructuring
//     const { content } = post;

//     const onChange = (e) => setPost({...post, [e.target.name]: e.target.value})



// // const allPosts = () => {

// //   fetchPosts('/post/getPosts')
// //   .then((data) => {
// //       if(!data.message) {
// //         console.log(data)
// //       } 
// //   }).then((data) => {
// //     return data
// //   })
// //   .catch((error) => {
// //       console.log(`Error! ${error.message}`)
// //   })
// // }
// // console.log(allPosts())
// // //const posts = allPosts()
// // //console.log(posts)

// /////////////

//     const onSubmit = (e) => {
//         e.preventDefault();

//         fetchData('/post/create', 
//           {
//             userId,
//             userName,
//             content
//           }, 
//         "POST")
//         .then((data) => {
//             if(!data.message) {
//                 console.log(data)
//                 createPost()
//             }
//         })
//         .catch((error) => {
//             console.log(`Error! ${error.message}`)
//         })
//     }


//     return(
//         <div className="profile">
            
//             <h1>HI!!! {userName}! </h1>
//             <hr />
//             <div className="container">
//                 <form className="profileForm" onSubmit={onSubmit}>
//                     <h1>What's up?</h1>
//                 <div className="mx-4 my-4">
//                    <label htmlFor="post" className="form-label">tell us</label>
//                    <input 
//                       type="text" 
//                       className="form-control" 
//                       id="content"
//                       name="content" 
//                       onChange={onChange}
//                       value={content}
//                       aria-describedby="emailHelp"
//                       required
//                     />
//                    {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
//                  </div>
//                  <button type="submit" className="btn my-4">Post</button>
//                 </form>
//             </div>
//                 {/* posts section */}
//             <div className="postsSection" id="postsSection">
   
//                 {/* <ProfileComp /> */}
//                 <div> 
//                     {/* {posts.map((post) => (<h3>{post.content}</h3>))} */}
//                 </div>

//                 {/* // */}
//                 {posts.map(item => {

//             return(
//               <div key={item._id} id='itemholder' className='container-fluid'>
                
//             <li className='listitem' >
//               {item.content} 
              
//             </li>
//             <div id='btns' className="btn-group-vertical">
//             <button  id='Ebtn' className="btn btn-primary btn-sm">Edit</button>
//             <button  id='Dbtn' className="btn btn-danger btn-sm">Delete</button>
            
//             </div>
          
//             </div>
           
//           )}
//           )}


//                 {/* // */}
            
//             </div>
//             <div className="allposts" id="allposts">
//             </div>

//         </div>
        
//     );
// }

// export default Profile;




// import { fetchData, allPosts, getPosts } from "../../main";
// import { useState, useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import Posts from "./Posts";
// // import {Posts} from "./Posts";


// const Profile = () => {
//     const { state } = useLocation();
//     const userName = state.username;
//     const userId = state._id;

    
    
//     // useEffect(() => {
//     //     fetch("http://localhost:5000/post/getPosts")
//     //     .then((response) => {
//     //     return response.json();
//     //     })
//     //     .then((data) => { 
//     //         console.log(data)  
//     //         setPosts(data);
//     //     });
        
//     // })

//     // useEffect(() => {
//     //     console.log(getPosts())
//     //     //getPosts()
//     //     //setPosts(getPosts())
//     // })

//     const [posts, setPosts] = useState(null);

//     useEffect(() => {
//         fetch("http://localhost:5000/post/getPosts")
//         .then(response => response.json())
//         .then(data => setPosts(data))
//       },[])
   
//     const createPost = () => {
//         const newPost = document.getElementById('postsSection');
//         //let posties = document.createElement('h1');
//         //posties.innerHTML = (Posts)
//         let textBox = document.createElement('h3');
//         textBox.innerHTML = (`${userName} says: ${content}`)
//         newPost.appendChild(textBox);
//     }

//     const [post, setPost] = useState ({
//         username: userName,
//         content: ''
//     });
//     // destructuring
//     const { username, content } = post;

//     const onChange = (e) => setPost({...post, [e.target.name]: e.target.value})

//     const onSubmit = (e) => {
//         e.preventDefault();

//         fetchData('/post/create', 
//           {
//             userId,
//             userName,
//             content
//           }, 
//         "POST")
//         .then((data) => {
//             if(!data.message) {
//                 console.log(data)
//                 createPost()
//             }
//         })
//         .catch((error) => {
//             console.log(`Error! ${error.message}`)
//         })
//     }
// ////////////////////////////button
// const deleteMe = (id) => {
//     // fetchData('/post/delete', 
//     //       {
//     //         id
//     //       }, 
//     //     "DELETE")
//     //     .then((data) => {
//     //         if(!data.message) {
//     //             console.log(data)
//     //             console.log(`success!!"`)
//     //         }
//     //     })
//     //     .catch((error) => {
//     //         console.log(`Error! ${error.message}`)
//     //     })
// }


//     return(
//         <div className="profile">
            
//             <h1>HI!!! {userName}! </h1>
//             <hr />
//             <div className="container">
//                 <form className="profileForm" onSubmit={onSubmit}>
//                     <h1>What's up?</h1>
//                 <div className="mx-4 my-4">
//                    <label htmlFor="post" className="form-label">tell us</label>
//                    <input 
//                       type="text" 
//                       className="form-control" 
//                       id="content"
//                       name="content" 
//                       onChange={onChange}
//                       value={content}
//                       aria-describedby="emailHelp"
//                       required
//                     />
//                    {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
//                  </div>
//                  <button type="submit" className="btn my-4">Post</button>
//                 </form>
//             </div>
//                 <div>
//                 <Posts></Posts>
//                 </div>
                

//         </div>
        
//     );
// }

// export default Profile;