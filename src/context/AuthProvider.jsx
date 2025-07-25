import React, { createContext, useEffect, useState } from 'react'
import { getlocalStorage, setlocalStorage } from '../utils/localstorage'

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
  // localStorage.clear()

    const [userData, setUserData] = useState(null)

   useEffect(() => {
     setlocalStorage()
     const {employees, admin} = getlocalStorage();
     setUserData({employees, admin});
     
   }, [])

  return (
    <div>
        <AuthContext.Provider value={userData}>
            {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider