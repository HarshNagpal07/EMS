import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
  return (
    <div id="tasklist" className='flex items-center justify-start gap-17 flex-nowrap overflow-x-auto h-[55%] w-full mt-10 py-3'>
        <AcceptTask/>
        <NewTask/>
        <CompleteTask/>
        <FailedTask/>
    </div>
  )
}

export default TaskList