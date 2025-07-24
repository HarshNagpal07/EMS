import React from 'react'

const AcceptTask = () => {
  return (
    <div className='flex-shrink-0 h-full w-[300px] p-1 bg-red-400 rounded-xl'>
            <div className='flex justify-between items-center mt-3 px-3 py-1'>
                <h2 className='text-sm bg-red-500 px-3 py-1 rounded'>High</h2>
                <h4 className='text-base'>14 Feb 2025</h4>
            </div>
            <h2 className='mt-2 px-3 py-1 text-xl font-semibold'>Make a youtube video</h2>
            <p className='text-sm mt-1 px-3 py-1'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi assumenda pariatur est minima. Saepe autem natus quam laborum fugit facere, ut aspernatur. Iste iure eveniet voluptatum culpa voluptatem nesciunt rem.
            </p>
            <div className='flex justify-between mt-4'>
                <button className='bg-green-500 py-1 px-2 text-sm'>Mark as Completed</button>
                <button className='bg-red-500 py-1 px-2 text-sm'>Mark as Failed</button>
            </div>
        </div>
  )
}

export default AcceptTask