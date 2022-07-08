import { fetchData, allPosts, getPosts } from "../../main";
import { useState, useEffect, useContext, createContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Posts from "./Posts";
import UserContext from "../../context/userContext";
// import {Posts} from "./Posts";


const Profile = () => {
    const {user} = useContext(UserContext);
    const { state } = useLocation();
    const userName = user.username;
    const userId = user._id;

    useEffect(() => {
        //Runs only on the first render
      }, []);

    const createPost = () => {
        const newPost = document.getElementById('postsSection');
        //let posties = document.createElement('h1');
        //posties.innerHTML = (Posts)
        let textBox = document.createElement('h3');
        textBox.innerHTML = (`${userName} says: ${content}`)
        newPost.appendChild(textBox);
    }

    const [post, setPost] = useState ({
        username: userName,
        content: ''
    });
    // destructuring
    const { username, content } = post;

    const onChange = (e) => setPost({...post, [e.target.name]: e.target.value})


    const onSubmit = () => {
        // e.preventDefault();

        fetchData('/post/create', 
        {
            userId: userId,
            username: userName,
            content: content
        }, 
        "POST")
        .then((data) => {
            if(!data.message) {
                console.log(data)
                console.log(userId, userName, content)
                // createPost()
            }
        })
        .catch((error) => {
            console.log(`Error! ${error.message}`)
        })
    }

    return(
        <div className="profile">
            
            {/* <h1>HI!!! {userName}! </h1> */}
            <hr />
            <div className="container">
                <form className="profileForm mx-auto my-4" onSubmit={onSubmit}>
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
                <div>
                <Posts></Posts>
                </div>
                

        </div>
        
    );
}

export default Profile;