import './App.css';
import { useNavigate } from "react-router-dom";
import logoImg from './logo.jfif';
import React , {useState} from 'react';
import axios from 'axios';

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    

    const handleSave = (e) => {
        e.preventDefault();

        const url = 'https://localhost:7259/api/User/register';
        const data = {
            email: email,
            password: password,
            confirmPassword: confirmPassword
        }

        axios.post(url, data)
        .then((result) => {
            const dt = result.data;
            navigate('/login', {replace: true});
        })
        .catch((error) => {
            console.log(error);
        })
      
    }

    return (
        <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://cdn.iconscout.com/icon/free/png-256/google-keep-3627621-3028847.png"
              alt="Your Company"
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Create your account
            </h2>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
                <div>          

                 <label htmlFor="email-address" className="sr-only">
                  Email
                </label>
                <input
                  id="email-address"
                  name="email-address"
                  type="email"
                  autoComplete="email-address"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-violet-500 focus:outline-none focus:ring-violet-500 sm:text-sm"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}/>
                  </div>
                  <div>

                <label htmlFor="cpassword" className="sr-only">
                  Password
                </label>
                <input
                  id="cpassword"
                  name="cpassword"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-violet-500 focus:outline-none focus:ring-violet-500 sm:text-sm"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}/>
                  </div>

                  <div>

                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-violet-500 focus:outline-none focus:ring-violet-500 sm:text-sm"
                  placeholder="Confirm Password"
                  onChange={(e) => setConfirmPassword(e.target.value)}/>
                  </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
              </div>
              <div className="text-sm">
                <a href="Login" className="font-medium text-violet-600 hover:text-violet-500">
                  Already a member? Log in
                </a>
              </div>
            </div>
            <div>
              <button
                type="submit"
                onClick={(e) => handleSave(e)}
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-violet-600 py-2 px-4 text-sm font-medium text-white hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                </span>
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
        
  );
}
export default SignUp;