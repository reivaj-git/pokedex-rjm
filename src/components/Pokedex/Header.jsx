import React from 'react'

const Header = () => {

  return (
    <section className='relative'>

      <div className='bg-red-600 h-20 relative'>
        {/* franja roja */}
        <div className='absolute left-0 -bottom-1'>
          <img className='w-[150px] xxs:w-[190px] sm:w-[220px]' src="/logoPokedex.png" alt="Logo pokedex " />
        </div>
      </div>

      <div className='bg-black h-12'>
        {/* franja negra */}
      </div>

      <div className='w-20 aspect-square bg-white border-[10px] border-black rounded-full  absolute -bottom-4 right-0 -translate-x-1/2 after:content-[""] after:h-11 after:aspect-square after:bg-gray-800 after:rounded-full after:absolute after:top-1/2 after:-translate-y-1/2 after:left-1/2  after:-translate-x-1/2 after:border-[9px] after:border-black'>
        {/* pokeball */}
      </div>

    </section>
  )
}

export default Header