import React from 'react';


const ProfilePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      
  {/* Banner */}
  <div className="relative">
  <img
    src="https://s3-alpha-sig.figma.com/img/10b2/d5ee/20210b0eea83b4ff7cf04e7d9e72c1a2?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NK823jbakqxJ4VAwfZgCsQQt-aRhdKMwp65SMiVSLkGTgB~sPwtwJj~j78wYc7nHw1F0Q7DxN3tIYcojpUCr2tqdEk21fJLQNmK7TwYeDTjXfOLS361su3033WsKOylILzA8DOtvjQU9Bq3xuYKnwdMqiDWdm6YSq9YTMS8D3r6jZbKXZgen3af9JxpjgMzxB-lLNGCgL817~4Zak~2fMJsKSWb264wJXr7q4uOx1DtSCYHqs1qPi4JFY4fwsw9iPksACL9iPW0YEtWXn2Nzy9DYTRFp8VOVU~u9v1E0CQzvikTjTp~9k3WpJV353y~l1mxB45HKhxJU1TxaCsUm~A__"
    alt="Manga Banner"
    className="w-full h-16 sm:h-[300px] lg:h-[500px] object-cover"
  />
  {/* Menú Hamburguesa y Logo */}
  <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
    {/* Menú Hamburguesa */}
    <img
      src="/images/MenuImage.png"
      alt="Menu"
      className="w-8 h-8 sm:w-12 sm:h-12 lg:w-[70px] lg:h-[70px]"
    />
    {/* Logo */}
    <img
      src="/images/logo.png"
      alt="Logo"
      className="w-8 h-8 sm:w-12 sm:h-12 lg:w-[70px] lg:h-[70px]"
    />
  </div>

  {/* Título Central */}
  <div className="absolute inset-0 flex flex-col justify-center items-center px-4 text-center">
    <h1 className="text-white text-2xl sm:text-4xl lg:text-5xl font-bold drop-shadow-lg mb-6 sm:mb-8">
      Profile
    </h1>
  </div>
</div>


  {/* Contenedor del formulario y la imagen */}
  <div className="-mt-12 mx-auto bg-white rounded-2xl  shadow-lg p-6 sm:p-8 lg:p-10 w-full max-w-4xl relative z-10">
    {/* Formulario de entrada (Izquierda) */}
    <div className="grid md:grid-cols-2 gap-8">
    <div className="flex flex-col items-center w-60 mx-auto space-y-4">
  <div className="border-b pb-2 w-full">
    <p className="text-gray-600">Lucas Ezequiel</p>
  </div>
  <div className="border-b pb-2 w-full">
    <p className="text-gray-600">Silva</p>
  </div>
  <div className="border-b pb-2 w-full">
    <p className="text-gray-600">Caseros, Buenos Aires</p>
  </div>
  <div className="border-b pb-2 w-full">
    <p className="text-gray-600">20/12/2022</p>
  </div>
  <div className="border-b pb-2 w-full">
    <p className="text-gray-600">URL Profile Image</p>
  </div>
  <div className="flex flex-col items-center space-y-4 w-full">
    <button className="w-full bg-emerald-400 text-white py-4 px-8 rounded-full hover:bg-emerald-500 transition-colors font-semibold">
      Save
    </button>
    <button className="w-full bg-red-200 text-red-500 py-4 px-8 rounded-full hover:bg-red-300 transition-colors font-semibold">
      Delete Account
    </button>
  </div>
</div>


      {/* Imagen circular y nombre (Derecha) */}
      <div className="flex flex-col justify-center items-center min-h-[200px]">
  <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
    <img 
      src="https://assets-prd.ignimgs.com/2022/08/17/3-naruto-1660778366362.png"
      alt="Profile"
      className="w-full h-full object-cover"
    />
  </div>
  <h2 className="text-lg font-semibold">Lucas Ezequiel Silva</h2>
  <p className="text-gray-500 text-sm">Caseros, Buenos Aires</p>
  <p className="text-gray-500 text-sm">20/12/2022</p>
</div>

      </div>
    </div>
  </div>




  
  );
};

export default ProfilePage;







