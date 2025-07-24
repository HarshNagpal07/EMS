import React from 'react'
import AcceptTask from './AcceptTask'

const TaskList = ({data}) => {
  return (
    <div id="tasklist" className='flex items-center justify-start gap-5 flex-nowrap overflow-x-auto h-[55%] w-full mt-10 py-5'>
        <AcceptTask/>

        <div className='flex-shrink-0 h-full w-[300px] p-1 bg-blue-400 rounded-xl'>
            <div className='flex justify-between items-center mt-3 px-3 py-1'>
                <h2 className='text-sm bg-red-500 px-3 py-1 rounded'>High</h2>
                <h4 className='text-base'>14 Feb 2025</h4>
            </div>
            <h2 className='mt-2 px-3 py-1 text-xl font-semibold'>Make a youtube video</h2>
            <p className='text-sm mt-1 px-3 py-1'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi assumenda pariatur est minima. Saepe autem natus quam laborum fugit facere, ut aspernatur. Iste iure eveniet voluptatum culpa voluptatem nesciunt rem.
            </p>
        </div>

        <div className='flex-shrink-0 h-full w-[300px] p-1 bg-green-400 rounded-xl'>
            <div className='flex justify-between items-center mt-3 px-3 py-1'>
                <h2 className='text-sm bg-red-500 px-3 py-1 rounded'>High</h2>
                <h4 className='text-base'>14 Feb 2025</h4>
            </div>
            <h2 className='mt-2 px-3 py-1 text-xl font-semibold'>Make a youtube video</h2>
            <p className='text-sm mt-1 px-3 py-1'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi assumenda pariatur est minima. Saepe autem natus quam laborum fugit facere, ut aspernatur. Iste iure eveniet voluptatum culpa voluptatem nesciunt rem.
            </p>
        </div>

        <div className='flex-shrink-0 h-full w-[300px] p-1 bg-yellow-400 rounded-xl'>
            <div className='flex justify-between items-center mt-3 px-3 py-1'>
                <h2 className='text-sm bg-red-500 px-3 py-1 rounded'>High</h2>
                <h4 className='text-base'>14 Feb 2025</h4>
            </div>
            <h2 className='mt-2 px-3 py-1 text-xl font-semibold'>Make a youtube video</h2>
            <p className='text-sm mt-1 px-3 py-1'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi assumenda pariatur est minima. Saepe autem natus quam laborum fugit facere, ut aspernatur. Iste iure eveniet voluptatum culpa voluptatem nesciunt rem.
            </p>
        </div>

        <div className='flex-shrink-0 h-full w-[300px] p-1 bg-purple-400 rounded-xl'>
            <div className='flex justify-between items-center mt-3 px-3 py-1'>
                <h2 className='text-sm bg-red-500 px-3 py-1 rounded'>High</h2>
                <h4 className='text-base'>14 Feb 2025</h4>
            </div>
            <h2 className='mt-2 px-3 py-1 text-xl font-semibold'>Make a youtube video</h2>
            <p className='text-sm mt-1 px-3 py-1'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi assumenda pariatur est minima. Saepe autem natus quam laborum fugit facere, ut aspernatur. Iste iure eveniet voluptatum culpa voluptatem nesciunt rem.
            </p>
        </div>
        
    </div>
  )
}

export default TaskList