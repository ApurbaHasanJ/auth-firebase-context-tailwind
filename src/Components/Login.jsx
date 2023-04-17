import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../Providers/AuthProviders";

const Login = () => {
  const { signInWithGoogle, signInUser } = useContext(UserContext);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signInUser(email, password)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        form.reset();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleGoogleLogin = () => {
    signInWithGoogle()
    .then((result) => {
      const loggedInUser = result.user;
      console.log(loggedInUser);
    })
    .catch(err => {
      console.log(err);
    })
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Please Login!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body w-full">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                required
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <Link to="#" className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <div className="form-control mt-6">
              <button onClick={handleGoogleLogin} className="btn btn-primary">
                Login Using Google
              </button>
            </div>
          </form>
          <label className="label">
            <Link
              to="/register"
              className="label-text-alt pl-8 pb-3 text-sm link link-hover"
            >
              New to Auth Master? Please Register
            </Link>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Login;
