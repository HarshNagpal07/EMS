import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getlocalStorage, setlocalStorage } from './utils/localstorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  const [user, setUser] = useState(null)
  const authData = useContext(AuthContext)
  //console.log() //Data Aa rha tha
  // useEffect(() => {
  //   if(authData){
  //     const loggedInUser = localStorage.getItem("loggedInUser")
  //     if(loggedInUser){
  //       setUser(loggedInUser.role)
  //     }
  //   }
  // }, [authData])
  // console.log(user)
  

  const handleLogin = (email, password)=>{
    if(email === "admin@me.com" && password === "123"){
      setUser("admin");
      localStorage.setItem("loggedInUser",JSON.stringify({role:"admin"}));
    }
    else if(authData && authData.employees.find((e)=>email === e.email && e.password === password)){
      setUser("employee");
      localStorage.setItem("loggedInUser",JSON.stringify({role:"employee"}));
    }
    else{
      alert("Invalid Credentials");
    }
  }
  

  return (
    <>
    {!user ? <Login handleLogin={handleLogin}/>: " "}
    {user === "admin" ? <AdminDashboard/> : <EmployeeDashboard/>}
    {/* <EmployeeDashboard/> */}
    {/* <AdminDashboard/> */}
    </>
  );
};

export default App