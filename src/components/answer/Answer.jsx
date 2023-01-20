const Answer = ({answer, note, size}) => {
  return (
    <>
      <div className={size ? 'flex mt-2 lg:pl-40 pl-5' : 'flex mt-2 pl-5'}>
        <div className="bg-slate-300 text-teal-900 m-1 my-auto p-2 drop-shadow rounded lg:ml-36">
          { note &&
            <div className="text-orange-700">
              Note for Medicare patients:
            </div>
          }
          {answer}
        </div>
        <img 
          className="rounded-full ml-5 md:w-20 md:h-20 h-12 drop-shadow" 
          src="/images/dad_recent.jpeg"
          alt="dr_peter_may"/>
      </div>
    </>
  )
}

export default Answer