export default function Navbar() {
  return (
    <header className="w-full pt-20">
      <nav className="box-content flex justify-between items-center gap-10 py-4 px-6 text-sm w-10/12 m-auto text-white rounded-md shadow-2 shadow-[inset_0px_0px_4px_4px_rgb(182,182,182,.4)] backdrop-blur-xl">
        <div className="flex">Homepage</div>
        <ul className="flex items-center gap-5">
          <li>
            <a href="">Login</a>
          </li>
          <li className=" border-2 py-1 px-3 rounded-md text-nowrap ">
            <a href="">Create Account</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
