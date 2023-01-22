function UseCase({title, content}) {
  return (
    <div>
      <div className='p-2 my-5 font-normal'>
        <p className='text-2xl text-center p-2 font-bold'>{title}</p>
        <p className="py-5">{content}</p>
      </div>
    </div>
  )
}

export default UseCase