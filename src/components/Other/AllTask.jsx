import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

   const authData = useContext(AuthContext)
//    console.log(authData.employees)
  return (
    <div className='bg-[#1c1c1c] p-2 mt-5 h-60 rounded'>
        <div className='bg-red-400 px-4 py-2 mt-5 flex justify-between rounded'>
            <h2 className='w-1/5'>Employee Name</h2>
            <h3 className='w-1/5'>New Task</h3>
            <h5 className='w-1/5'>Active Task</h5>
            <h5 className='w-1/5'>Completed Task</h5>
            <h5 className='w-1/5'>Failed Task</h5>
        </div>
        <div className='h-[80%] overflow-auto'>
            {authData.employees.map(function(elem){
            return <div key={elem.id} className='bg-emerald-500 px-4 py-2 mt-5 flex justify-between rounded'>
            <h2 className='w-1/5 text-white'>{elem.firstname}</h2>
            <h3 className='w-1/5 text-blue-600'>{elem.taskCount.newTask}</h3>
            <h5 className='w-1/5 text-yellow-400'>{elem.taskCount.active}</h5>
            <h5 className='w-1/5 text-green-600'>{elem.taskCount.completed}</h5>
            <h5 className='w-1/5 text-red-600'>Failed</h5>
        </div>
        })}
        </div>
    </div>
  )
}

export default AllTask