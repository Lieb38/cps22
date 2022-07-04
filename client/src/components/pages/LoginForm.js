import { fetchData } from "../../main";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState ({
    username: '',
    password: ''
  });

  const { username, password} = user;
  const onChange = (e) => setUser({...user, [e.target.name]: e.target.value})

  const onSubmit = (e) => {
    e.preventDefault();
    fetchData('/user/login',
      {
        username,
        password
      },
      "POST")
      .then((data) => {
        if(!data.message) {
          navigate("/profile", { state: data });
          console.log(data)

          console.log(`success!!"`)
        }
      })
      .catch((error) => {
        console.log(`Error! ${error.message}`)
      })
  }


    return(
        <div>
            
            <div className="container mw-30">
                <form className="login" onSubmit={onSubmit}>
                <h1>Log In</h1>
                 <div className="mx-4 my-4">
                   <label htmlFor="username" className="form-label">Username</label>
                   <input 
                    type="text"
                    className="form-control" 
                    id="username" 
                    name="username"
                    onChange={onChange}
                    value={username}
                    aria-describedby="emailHelp"
                    required
                  />
                 </div>
                 <div className="mx-4 my-4">
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
                 <button type="submit" className="btn btn-primary my-4">Login</button>
                </form>

            </div>

        </div>
    );
}

export default Login;