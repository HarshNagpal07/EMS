import React from 'react'

const NewTask = ({data}) => {
  return (
    <div className='flex-shrink-0 h-full w-[300px] p-1 bg-blue-400 rounded-xl'>
            <div className='flex justify-between items-center mt-3 px-3 py-1'>
                <h2 className='text-sm bg-red-500 px-3 py-1 rounded'>{data.category}</h2>
                <h4 className='text-base'>{data.date}</h4>
            </div>
            <h2 className='mt-2 px-3 py-1 text-xl font-semibold'>{data.title}</h2>
            <p className='text-sm mt-1 px-3 py-1'>
                {data.description}
            </p>
            <div className='mt-4'>
                <button>Accept Task</button>
            </div>
        </div>
  )
}

export default NewTask