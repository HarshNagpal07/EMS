import React, { useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getlocalStorage, setlocalStorage } from './utils/localstorage'

const App = () => {

  const [user, setUser] = useState(null)

  const handleLogin = (email, password)=>{
    if(email == "admin@me.com" && password == "123"){
      console.log("This is Admin")
    }
    else if(email == "user@me.com" && password == "123"){
      console.log("This is user")
    }
    else{
      alert("Invalid Credentials")
    }
    // console.log(email, password)
  }

  // handleLogin("admin@me.com", 123)
  // useEffect(() => { // if i want to see a how the data is stored i array
  //   setlocalStorage()

  //   getlocalStorage()
    
  // }, )
  return (
    <>
    {!user ? <Login handleLogin={handleLogin}/>: " "}
    {/* <EmployeeDashboard/> */}
    {/* <AdminDashboard/> */}
    </>
  )
}

export default App