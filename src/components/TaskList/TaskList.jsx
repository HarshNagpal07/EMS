import React from 'react'

const TaskList = () => {
  return (
    <div className='flex items-center justify-start gap-5 flex-nowrap h-[55%] w-full mt-10 py-5 bg-red-500'>
        <div className='flex-shrink-0 h-full w-[300px] bg-yellow-400 rounded-xl'>
        </div>
        <div className='flex-shrink-0 h-full w-[300px] bg-yellow-400 rounded-xl'>
        </div>
        <div className='flex-shrink-0 h-full w-[300px] bg-yellow-400 rounded-xl'>
        </div>
        <div className='flex-shrink-0 h-full w-[300px] bg-yellow-400 rounded-xl'>
        </div>
    </div>
  )
}

export default TaskList