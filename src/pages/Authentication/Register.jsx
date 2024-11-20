import React from "react";
import { Link } from "react-router-dom";
import img from '../../assets/register-img.png'

const Register = () => {
  return (
    <div className="flex flex-col max-w-6xl mx-auto gap-4 md:flex-row">
      {/* image */}
      <div className="w-full md:w-1/2">
        <img className="h-full" src={img} alt="" />
      </div>
      <div className="w-full md:w-1/2 mx-auto">
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800">
        <h1 className="text-2xl font-bold text-center">Register</h1>
        <form noValidate="" action="" className="space-y-6">
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block dark:text-gray-600">
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="email" className="block dark:text-gray-600">
              Email
            </label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="email"
              className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="photo" className="block dark:text-gray-600">
              Photo URL
            </label>
            <input
              type="text"
              name="photo"
              id="photo"
              placeholder="photo"
              className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block dark:text-gray-600">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
          </div>
          <button className="block w-full bg-info p-3 text-center rounded-sm dark:text-gray-50 dark:bg-violet-600">
            Register
          </button>
        </form>
        <div className="flex justify-center">
          <Link
            to={"/login"}
            className="text-sm text-center sm:px-6 dark:text-gray-600"
          >
            Already have an account?{" "}
            <a
              rel="noopener noreferrer"
              href="#"
              className="underline dark:text-gray-800"
            >
              Login
            </a>
          </Link>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Register;
