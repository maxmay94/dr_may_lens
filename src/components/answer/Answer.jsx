const Answer = ({answer, size}) => {
  return (
    <>
      <div className={size ? 'flex mt-2 lg:pl-40 pl-5' : 'flex mt-2 pl-5'}>
        <div className="bg-slate-300 text-slate-900 m-1 my-auto p-2 drop-shadow rounded lg:ml-36">
          {answer}
        </div>
        <img 
          className="rounded-full ml-5 md:w-20 md:h-20 h-12 drop-shadow" 
          src="/images/dad_recent.jpeg"
          alt="dr_peter_may"/>
      </div>
      <br />
    </>
  )
}

export default Answer