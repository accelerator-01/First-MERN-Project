function Navbar() {
  return (
    <nav className="w-screen bg-gradient-to-r from-gray-100 via-[#bce1ff] to-gray-100 h-fit overflow-hidden">
      <div className="py-4 lg:px-8 px-4 max-w-[1280px] h-16 m-auto text-blue-gray-600 flex items-center justify-between">
        <div>
          <h1 className="lg:text-2xl text-xl uppercase tracking-wider cursor-pointer font-bold">
            Untitled
          </h1>
        </div>
        <div
          className="flex lg:gap-8 gap-6 uppercase tracking-wider cursor-pointer text-lg items-center"
          id="navItems"
        >
          <span className="group">
            Services
            <div className="w-0 group-hover:w-full h-0.5 bg-white ease-in-out duration-500"></div>
          </span>
          <span className="group">
            About
            <div className="w-0 group-hover:w-full h-0.5 bg-white ease-in-out duration-500"></div>
          </span>
          <span className="group">
            Contact
            <div className="w-0 group-hover:w-full h-0.5 bg-white ease-in-out duration-500"></div>
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
