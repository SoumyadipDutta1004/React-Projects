



const Navbar = () => {
  return ( 
    <nav className="flex justify-between items-center py-2 px-24 h-[72px]">
      <div>
        <img src="/images/logo.png" alt="logo" />
      </div>

      <ul className="flex gap-6 font-semibold">
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer">About</li>
        <li className="cursor-pointer">Contact</li>
      </ul>
    </nav>
   );
}
 
export default Navbar;