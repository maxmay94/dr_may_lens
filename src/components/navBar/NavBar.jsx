const NavBar = () => {
  return (
    <div className="flex justify-around bg-slate-200/80 mix-blend-luminosity backdrop-blur-md w-full fixed top-0 left-0 right-0 z-20">
      <div className='font-sans w-screen'>
        <nav className="">
          <ul className="flex flex-row">

            <li className="grow m-2 font-base text-2xl text-slate-800">
              <p>
                Dr. Peter May
              </p>
              <p className="text-xs ">
                Church Street Chiropractic
              </p>
            </li>

            <li className="m-4 text-xs font-light">
              <p className="text-slate-900 text-right">
                (413) 664-9050
              </p>
              <p className="text-slate-900 text-right">
                docmay@gmail.com
              </p>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default NavBar