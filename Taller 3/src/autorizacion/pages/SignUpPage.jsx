import { Button, Card, Checkbox, Label, TextInput } from 'flowbite-react';

function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center ">
    <div className="w-full max-w-md p-4 ">
          <Card className="flex items-center justify-center rounded-sm">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/2560px-Rick_and_Morty.svg.png" alt="Logo" className="mx-auto" />
            <form className="flex flex-col gap-4">
              <div >
                <TextInput
                  id="email1"
                  placeholder="Email"
                  required
                  type="email"
                />
              </div>
              <div >
                <TextInput
                  id="full_Name1"
                  placeholder="Full Name"
                  required
                  type="fullName"
                />
              </div>
              <div >
                <TextInput
                  id="username1"
                  placeholder="Username"
                  required
                  type="username"
                />
              </div>
              <div>
                <TextInput
                  id="password1"
                  required
                  type="password"
                  placeholder="Password"
                />
              </div>
              <Button type="submit">
                Submit
              </Button>
              <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
         Have an account? <a href="#" className="text-[#40B5CB] hover:underline dark:text-blue-500">Login</a>
          </div>
            </form>
          </Card>
        </div>
    </div>
   /* <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-sm shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form className="space-y-3" action="#">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/2560px-Rick_and_Morty.svg.png" alt="Logo" className="mx-auto" />
        <h4 class="text-xl font-medium text-gray-900 dark:text-white">Sign up to see exclusive content from Rick and Morty.</h4>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lgH focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Email"
              required
            />
          </div>
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
            <input
              type="name"
              name="name"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lgH focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Name"
              required
            />
          </div>
          <div>
            <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
            <input
              type="username"
              name="username"
              id="username"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lgH focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Username"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full text-white bg-[#40B5CB] hover:bg-[#9DC232] focus:ring-4 focus:outline-none focus:ring-[#80A524] font-medium rounded-sm text-sm px-5 py-2 text-center dark:bg-[#C0DF40] dark:hover:bg-[#9DC232] dark:focus:ring-[#80A524]"
          >
            Sign Up
          </button>
          <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Have an account? <a href="#" className="text-[#40B5CB] hover:underline dark:text-blue-500">Login</a>
          </div>
        </form>
      </div>
    </div> */
  );
}

export default SignUpPage;
