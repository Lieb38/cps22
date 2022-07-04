import { fetchData } from "../../main";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Profile = () => {
    const { state } = useLocation();
    const userName = state.username;
    const userId = state._id;

    const [post, setPost] = useState ({
        content: ''
    });
    // destructuring
    const { content } = post;

    const onChange = (e) => setPost({...post, [e.target.name]: e.target.value})
   
    const createPost = () => {
        const newPost = document.getElementById('postsSection');
        let textBox = document.createElement('h3');
        textBox.innerHTML = (`${userName} says: ${content}`)
        newPost.appendChild(textBox);
    }

    window.onload = function allPosts() {

        fetchData('/post/getAll',
        {
            userId
        },
        "GET")
        .then((data) => {
            if(!data.message) {
                console.log(data)
            }
        })
        .catch((error) => {
            console.log(`Error! ${error.message}`)
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();

        fetchData('/post/create', 
          {
            userId,
            content
          }, 
        "POST")
        .then((data) => {
            if(!data.message) {
                console.log(data)
                createPost()
            }
        })
        .catch((error) => {
            console.log(`Error! ${error.message}`)
        })
    }


    return(
        <div className="profile">
            
            <h1>HI!!! {userName}! </h1>
            <hr />
            <div className="container">
                <form className="profileForm" onSubmit={onSubmit}>
                    <h1>What's up?</h1>
                <div className="mx-4 my-4">
                   <label htmlFor="post" className="form-label">tell us</label>
                   <input 
                      type="text" 
                      className="form-control" 
                      id="content"
                      name="content" 
                      onChange={onChange}
                      value={content}
                      aria-describedby="emailHelp"
                      required
                    />
                   {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                 </div>
                 <button type="submit" className="btn my-4">Post</button>
                </form>
            </div>
{/* posts section */}
            <div className="postsSection" id="postsSection">
                {/* <form className="">

                </form> */}
            
            </div>
            <div className="allposts" id="allposts">
            </div>

        </div>
        
    );
}

export default Profile;