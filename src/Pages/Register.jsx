import React from "react";


function Welcome(params) {
    return (
        <>

{/* welcome  */}


<div className="h-screen flex">
  {/* Left: Login Form */}
  <div className="flex w-1/2 justify-center items-center bg-white">
    <div className="bg-white relative">
      <div className="text-center">
        <h1 className="text-gray-800 font-bold text-2xl mb-1">Welcome!</h1>
        <p className="text-sm font-normal text-gray-600 mb-7">Discover manga and comics, track your progress, have fun, read manga.</p>
      </div>

      {/* Email Input */}
      <div className="relative mb-4">
        <div className="absolute top-[-8px] left-3 text-sm text-custom-pink bg-white px-1 ">Email</div>
        <div className="border-2 border-solid border-gray-400 rounded-2xl px-3 py-2 pt-6">
          <div className="flex items-center justify-between">
            <input className="pl-2 pr-8 outline-none border-none w-full" type="text" placeholder="Email Address" />
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
            </svg>
          </div>
        </div>
      </div>

      {/* Photo URL Input with Camera Icon */}
      <div className="relative mb-4">
        <div className="absolute top-[-8px] left-3 text-sm text-custom-pink bg-white px-1 ">Photo</div>
        <div className="border-2 border-solid border-gray-400 rounded-2xl px-3 py-2 pt-6">
          <div className="flex items-center justify-between">
            <input className="pl-2 pr-8 outline-none border-none w-full" type="text" placeholder="Url" />
            {/* Camera Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M12 2v4M6 6v12h12V6H6zm6 6h.01M12 14h.01M12 10h.01" />
            </svg>
          </div>
        </div>
      </div>

      {/* Password Input */}
      <div className="relative mb-4">
        <div className="absolute top-[-8px] left-3 text-sm text-custom-pink bg-white px-1 ">Password</div>
        <div className="border-2 border-solid border-gray-400 rounded-2xl px-3 py-2 pt-6">
          <div className="flex items-center justify-between">
            <input className="pl-2 pr-8 outline-none border-none w-full" type="password" placeholder="Password" />
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>

      {/* Send Notification Checkbox */}
      <div className="flex items-center mb-4">
        <input type="checkbox" id="notifications" className="mr-2" />
        <label htmlFor="notifications" className="text-sm text-gray-600">Send notification to my email</label>
      </div>

      <button type="submit" className="block w-full h-12 bg-custom-pink mt-4 py-2 rounded-2xl text-white font-semibold mb-2 shadow-custom-yellow hover:bg-custom-pink-dark focus:ring-4 focus:ring-custom-yellow">Sign up</button>

<br />

      {/* Google Sign In Button */}
      <button className="flex items-center justify-center w-full py-4 mb-6 text-sm font-medium text-opacity-80 transition duration-300 rounded-2xl border-2 border-grey-500 text-grey-900 bg-grey-300 hover:bg-grey-400 focus:ring-4 focus:ring-grey-300">
        <img className="h-5 mr-2" src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/logos/logo-google.png" alt="Google logo" />
        Sign in with Google
      </button>

      {/* Already Have an Account? Log In */}
      <div className="text-center mb-4">
        <span className="text-sm text-gray-600">
          Already have an account? 
          <a href="#" className="text-custom-pink hover:text-custom-pink-dark"> Log In</a>
        </span>
      </div>

      {/* Go Back to Home Page */}
      <div className="text-center">
        <span className="text-sm text-gray-600">
          Go back to 
          <a href="#" className="text-custom-pink hover:text-custom-pink-dark"> home page</a>
        </span>
      </div>
    </div>
  </div>
  
  {/* Right: Background Image */}
  <div className="flex w-1/2 justify-around items-center bg-cover bg-center" style={{ backgroundImage: 'url(https://s3-alpha-sig.figma.com/img/5d98/eac1/025f012e94a72840af6fc1f67a349f61?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MtGJF7E0D6~8zP9qJDOh~vl~H-KfvC-43eCh-x0l1DphvRvw-q4VjRKc2pvAyU07MpdMI8DnytXVjzZ2sLz7qxUEJFsWD4pJd3VQqkPJmCr-ucqj2OuyAfiYHd8j7zWEzIm8AqrsMcLVWAsQ9E1juZy3ZGgxL5iJZwG5Neuvn~oU-pdeDLybUkdtBxbWN5-VvYmeeteKMPy9WaRQaByX-g4ieNpvdeCUqZngEkVytLr4tbYBe55HhSMhQGvxwwlXEYfkFT9LRvwVOfkCgum2tY4Ry2S~9lVhZTdjAMc~zXjodSKPWOFHggoN4GrSA-qAkaaGbQi0J2xdcEuop1nJkA__' }}></div>
</div>


        </>
    );
}

export { Welcome };