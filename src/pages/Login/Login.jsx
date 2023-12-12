import { Link, useLocation, useNavigate } from 'react-router-dom';
import login from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import axios from 'axios';


const Login = () => {

    const { signInUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location)

    const handleLogin = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        // console.log(user)


        // sign in user
        signInUser(email, password)
            .then(result => {
                const loggedInUser = result.user
                console.log(loggedInUser);
                const user = { email }

                // get access token
                axios.post('http://localhost:3000/jwt', user, {
                    withCredentials: true
                })
                    .then(res => {
                        console.log(res.data)
                        if (res.data.success) {
                            navigate(location?.state ? location?.state : '/');
                        }
                    })

            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mr-28">
                    <img src={login} alt="" />
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-5xl font-bold text-center mt-4">Login now!</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p className='my-4 text-center'>New to Cars Doctors <Link className='text-orange-400' to="/sign">Sign Up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;