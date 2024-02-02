import React from 'react'

export const MenuItem = () => {
  return (

    <div className="bg-gray-200 p-4 rounded-lg text-center cursor-pointer hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all">
        <div className='text-center'>
            <img className='max-h-24 block mx-auto' src="/pizza.png" alt="Pizza" />
        </div>
        
        <h4 className="font-semibold my-3 text-xl">Pepperoni Pizza</h4>
        <p className="text-gray-500 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
             voluptatem rerum quia nihil, sit iste repellendus sapiente 
        </p>
        <button className=" mt-4 bg-primary text-white rounded-full px-6 py-2 ">+ 9.99€</button>
    </div>



  )
}
