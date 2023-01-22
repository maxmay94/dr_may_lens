function UseCase({title, content}) {
  return (
    <div>
      <div className='p-2'>
        <p className='text-xl text-left underline'>{title}</p>
        {content}
      </div>
    </div>
  )
}

export default UseCase