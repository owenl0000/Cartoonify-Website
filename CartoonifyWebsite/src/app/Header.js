function Header() {
    return (
      <header className="flex justify-between items-center h-20 bg-blue-900 text-turquoise-400 font-trend">
        <div className="flex items-center ml-10">
          <h6 className="text-4xl m-0 mb-4">Cartoonify</h6>
        </div>
        <nav className="flex gap-6 items-center mr-16 text-sm">
          <a href="/" className="font-trend mb-2">Home</a>
          <a href="/gallery" className="font-trend mb-2">Gallery</a>
          <a href="#about" className="font-trend mb-2">About</a>
          <a href="#service" className="font-trend mb-2">Service</a>
          <a href="#tutorial" className="font-trend mb-2">Tutorial</a>
          <a href="#contact" className="font-trend mb-2">Contact</a>
          <a href="/cartoonize" className="font-trend bg-turquoise text-off-white border pb-3 px-1 p-2 cursor-pointer rounded-md flex items-center">
          Cartoonize
        </a>
        </nav>
      </header>
    );
  }
  
  export default Header;
  