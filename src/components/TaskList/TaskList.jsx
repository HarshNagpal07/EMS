import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
    console.log(data);
  return (
    <div id="tasklist" className='flex items-center justify-start gap-17 flex-nowrap overflow-x-auto h-[55%] w-full mt-10 py-3'>
        {data.tasks.map((elem)=>{
          
          if(elem.active){
            return <AcceptTask/>
          }
          if(elem.newTask){
            return <NewTask/>
          }
          if(elem.completed){
            return <CompleteTask/>
          }
          if(elem.failed){
            return <FailedTask/>
          }
        })}
    </div>
  )
}

export default TaskList