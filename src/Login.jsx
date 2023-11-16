import React from 'react';
import { useNavigate } from 'react-router-dom'

export const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const Login = (props) => {
    const navigate = useNavigate()


    const checkCredentials = async (username, password) => {
        const url = BACKEND_URL + '/api/user/login';
        const options = {
            method: "POST",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify ({
                username: username,
                password: password
            })
        }
        const res = await fetch(url, options);
        const data = await res.json();
        console.log(data)
        if (data.status === 'ok'){
            props.logMeIn(data.user)
            navigate("/")
        }
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        const username = e.target.username.value;
        const password = e.target.password.value;


        checkCredentials(username, password)

    };


    return (
        <div className='text-center p-4'>
            <h1>Login</h1>
            <form onSubmit={handleSubmit} className='mx-auto col-4 rounded border p-4 text-start'>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input type="text" className="form-control" id="username" aria-describedby="username" name='username'/>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" name='password' className="form-control" id="password" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
           </div>
    )
};

export default Login