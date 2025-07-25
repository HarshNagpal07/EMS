import React, { useState } from 'react'
import { setlocalStorage } from '../../utils/localstorage'

const Header = (props) => {
  // const [username, setUsername] = useState("")

  // if(!data){
  //   setUsername("Admin")
  // }else{
  //   setUsername(data.firstname)
  // }
  // console.log(data)

  const logOutUser = ()=>{
    localStorage.setItem("loggedInUser","")
    props.changeUser("");
    // window.location.reload()Choose directly reload the page directly with react
  }
  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl text-amber-50 font-medium'> Hello <br /> <span className='text-3xl font-semibold'>username 🤘</span> </h1>
        <button onClick={logOutUser} className='bg-red-500 text-lg font-medium text-white px-5 py-2 rounded-sm'>Logout</button>
    </div>
  )
}

export default Header