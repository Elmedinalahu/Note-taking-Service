import './App.css';
import { useNavigate } from "react-router-dom";
import logoImg from './logo.jfif'

const SignUp = () => {
    const navigate = useNavigate();
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
                 <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-violet-500 focus:outline-none focus:ring-violet-500 sm:text-sm"
                  placeholder="Email"/>
                  </div>
                  <div>
                    <label htmlFor="password" className="sr-only">
                        New Password
                        </label>
                        <input
                          type="password"
                          autoComplete="password"
                          required
                          className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-violet-500 focus:outline-none focus:ring-violet-500 sm:text-sm"
                          placeholder="New Password"/>
                        </div>
                      <div>
                  </div>
                  <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-violet-500 focus:outline-none focus:ring-violet-500 sm:text-sm"
                  placeholder="Confirm Password"/>
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