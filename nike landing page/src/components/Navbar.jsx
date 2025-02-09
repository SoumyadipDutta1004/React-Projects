

const Navbar = () => {
  return ( 
      <nav className="flex justify-around items-center p-4">
        <div>
            <img src="./brand_logo.png" alt="Brand logo" />
          </div>

        <ul className="flex gap-7 font-semibold">
          <li className="cursor-pointer">Menu</li>
          <li className="cursor-pointer">Location</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Contact</li>
        </ul>

        <button className="btn">Login</button>
      </nav>
   );
}
 
export default Navbar;