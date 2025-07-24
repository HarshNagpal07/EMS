import React from 'react'

const TaskListNumber = ({data}) => {
  return (
    <div className='flex mt-10 justify-between gap-5 screen'>
        <div className='rounded-xl w-[45%] px-4 py-8 bg-red-400'>
          <h2 className='text-3xl'>0</h2>
          <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className='rounded-xl w-[45%] px-4 py-8 bg-blue-400'>
          <h2 className='text-3xl'>0</h2>
          <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className='rounded-xl w-[45%] px-4 py-8 bg-green-400'>
          <h2 className='text-3xl'>0</h2>
          <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className='rounded-xl w-[45%] px-4 py-8 bg-yellow-400'>
          <h2 className='text-3xl'>0</h2>
          <h3 className='text-xl font-medium'>New Task</h3>
        </div>

    </div>
  )
}

export default TaskListNumber