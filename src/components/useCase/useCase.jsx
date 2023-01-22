function UseCase({title, content}) {
  return (
    <div>
      <div className='p-2 mb-10 font-normal'>
        <p className='text-xl text-left underline'>{title}</p>
        {content}
      </div>
    </div>
  )
}

export default UseCase