import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getlocalStorage, setlocalStorage } from './utils/localstorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  const [user, setUser] = useState(null)

  const handleLogin = (email, password)=>{
    if(email == "admin@me.com" && password == "123"){
      setUser("admin")
      // console.log(user)
    }
    else if(email == "user@me.com" && password == "123"){
      setUser("employee")
      // console.log(user)
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

  const data =useContext(AuthContext)
  console.log(data)

  return (
    <>
    {!user ? <Login handleLogin={handleLogin}/>: " "}
    {user == "admin" ? <AdminDashboard/> : <EmployeeDashboard/>}
    {/* <EmployeeDashboard/> */}
    {/* <AdminDashboard/> */}
    </>
  )
}

export default App