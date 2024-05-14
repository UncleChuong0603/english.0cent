
const searchbar = () => {
  return (
    <section className='w-full h-auto flex-col  bg-white rounded-3xl space-y-10 px-10 py-10'>
      <div className='w-full h-auto flex-col space-y-10' >
          <div className='flex space-x-10'>
            <div className='w-full h-16 bg-white border-2 border-black rounded-3xl px-10 py-10 flex-between'>
              <p>Type here to search</p>
              <div className='relative w-1/4 h-12   bg-black text-white rounded-3xl flex-center'>Search</div>
            </div>
          </div>
          <div className='flex-start space-x-10 '>
            <div className='w-auto h-12   bg-gray-100 rounded-3xl flex-center px-10'>Easy</div>                      
          </div>
      </div>
    </section>
  )
}

export default searchbar