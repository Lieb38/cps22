import { fetchData } from "../../main";
import { useState, fragment, useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../context/userContext";

const Register = () => {
    const navigate = useNavigate();

    const {user, updateUser} = useContext(UserContext);

    const { username, password, password2 } = user;

    const onChange = (e) => updateUser(e.target.name, e.target.value)
   
    const onSubmit = (e) => {
        e.preventDefault();

        fetchData('/user/register', 
          {
            username,
            password
          }, 
        "POST")
        .then((data) => {
            if(!data.message) {
                navigate("/profile", { state: data });
                console.log(data)
                updateUser("authenticated", true)
                console.log(`success!!"`)
            }
        })
        .catch((error) => {
            console.log(`Error! ${error.message}`)
        })

        if(password !== password2) {
            console.log("passwords must match!");
        } else {
            console.log(`success!!"`)
        }
    }

    return(
        <div>
            <div className="container">
                <form className="register mx-auto my-4" onSubmit={onSubmit}>
                    <h1>Register</h1>
                <div className="non">
                   <label htmlFor="username" className="form-label">Username</label>
                   <input 
                      type="text" 
                      className="form-control" 
                      id="username"
                      name="username" 
                      onChange={onChange}
                      value={username}
                      required
                    />
                   {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                 </div>
                 <div className="non">
                   <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                   <input 
                      type="password" 
                      className="form-control" 
                      id="password"
                      name="password" 
                      onChange={onChange}
                      value={password}
                      required
                    />
                 </div>
                 <div className="non">
                   <label htmlFor="password2" className="form-label">Password check</label>
                   <input 
                      type="password" 
                      className="form-control"
                      id="password2"
                      name="password2" 
                      onChange={onChange}
                      value={password2}
                      required
                    />
                 </div>
                 <button type="submit" className="btn my-4">Register</button>
                </form>
            </div>

        </div>
    );
}

export default Register;