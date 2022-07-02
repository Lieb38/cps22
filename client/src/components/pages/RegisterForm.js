const Register = () => {
    return(
        <div>
            <div className="container">
                <form className="register">
                    <h1>Register</h1>
                <div className="mx-4 my-4">
                   <label for="exampleInputEmail1" class="form-label">Email address</label>
                   <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                   <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                 </div>
                 <div className="mx-4 my-4">
                   <label for="exampleInputPassword1" className="form-label">Password</label>
                   <input type="password" className="form-control" id="exampleInputPassword1"/>
                 </div>
                 <button type="submit" className="btn my-4">Register</button>
                </form>
            </div>

        </div>
    );
}

export default Register;