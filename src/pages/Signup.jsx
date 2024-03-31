import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function Signup() {
  const [error, setError] = useState("");
  const navigate = useNavigate()

 // const notify = () => toast.error("Wow so easy!");

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://ecommerce-sagartmg2.vercel.app/api/users/signup", {
        name: e.target.name.value,
        email: e.target.email.value,
        password: e.target.password.value,
      })
      .then((res) => {
        //console.log("login seccesfull");
        //toast('Login Successful')
        toast.success('Login Successful', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
            navigate('/')
      })
      .catch((err) => {
        setError(err.response.data.msg);
        toast.error(err.response.data.msg);
      });
  };

  return (
    <>
    
        

      <div className="container">
        <form className="hidden">
          <input
            type="text"
            className="border px-4 py-2 rounded focus:shadow-lg focus:outline-none focus:border-primary"
          />
          <input type="text" name="" id="" />
          <button>login</button>
        </form>

        <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
          

          <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              class="mx-auto h-10 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Signup
            </h2>
          </div>

          {/* {error && (
            <div class="sm:mx-auto sm:w-full sm:max-w-sm bg-red-200 p-4">
              {error}
            </div>
          )} */}

          <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form class="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  for="name"
                  class="block text-sm font-medium leading-6 text-gray-900"
                >
                  Name
                </label>
                <div class="mt-2">
                  <input
                    id="name"
                    name="name"
                    type="name"
                    autocomplete="name"
                    required
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label
                  for="email"
                  class="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div class="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autocomplete="email"
                    required
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div class="flex items-center justify-between">
                  <label
                    for="password"
                    class="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                  
                </div>
                <div class="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autocomplete="current-password"
                    required
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label
                  for="role"
                  class="block text-sm font-medium leading-6 text-gray-900"
                >
                  Role
                </label>
                <div class="mt-2">
                  <input
                    id="role"
                    name="role"
                    type="role"
                    autocomplete="role"
                    required
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>


              <div>
                <button
                  type="submit"
                  class="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign up
                </button>
              </div>
            </form>

            <p class="mt-10 text-center text-sm text-gray-500">
              Not a member?
              <Link
                to='/signup'
                class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Signup;
