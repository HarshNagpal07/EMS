import React, { useEffect } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getlocalStorage, setlocalStorage } from './utils/localstorage'

const App = () => {

  useEffect(() => {
    setlocalStorage()

    getlocalStorage()
    
  }, )
  return (
    <>
    <Login/>
    {/* <EmployeeDashboard/> */}
    {/* <AdminDashboard/> */}
    </>
  )
}

export default App