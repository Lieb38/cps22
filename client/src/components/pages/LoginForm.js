const Login = () => {
    return(
        <div>
            
            <div className="container mw-30">
                <form className="login">
                <h1>Log In</h1>
                 <div className="mx-4 my-4">
                   <label for="exampleInputEmail1" className="form-label">Email address</label>
                   <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                 </div>
                 <div className="mx-4 my-4">
                   <label for="exampleInputPassword1" className="form-label">Password</label>
                   <input type="password" className="form-control" id="exampleInputPassword1"/>
                 </div>
                 <button type="submit" className="btn btn-primary my-4">Login</button>
                </form>

            </div>

        </div>
    );
}

export default Login;