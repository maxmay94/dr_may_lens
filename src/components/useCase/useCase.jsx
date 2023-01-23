function UseCase({title, content}) {
  return (
    <div className="">
      <div className='p-2 my-5 font-normal'>
        <p className='text-2xl text-center p-2 font-black text-slate-200'>{title}</p>
        <p className="py-5 text-justify text-slate-200">{content}</p>
      </div>
    </div>
  )
}

export default UseCase