const Footer = () => {
  return (
    <div className="flex justify-around bg-slate-200/90
    backdrop-blur-md shadow-md w-full
    fixed bottom-0 left-0 right-0 z-10">
      <div className='font-sans w-screen'>
        <nav className="">
          <ul className="flex flex-row">

            <li className="grow m-2 text-xs font-light">
              <p className="text-slate-900">
                docmay@gmail.com
              </p>
            </li>

            <li className="grow sm:m-2 m-0">
              <div className="text-xs text-sky-900 sm:block hidden">
                73 Church Street, North Adams, MA 01247
              </div>
            </li>

            <li className="m-2 text-xs font-light">
              <p className="text-slate-900">
                (413) 664-9050
              </p>
            </li>

          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Footer