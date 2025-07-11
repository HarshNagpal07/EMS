import React, { createContext, useState } from 'react'
import { getlocalStorage } from '../utils/localstorage'

export const  AuthContext = createContext()

const AuthProvider = ({children}) => {

    const [userData, setUserData] = useState(null)

    const data = getlocalStorage()
    console.log(data.employees)

  return (
    <div>
        <AuthContext.Provider value={"Harsh"}>
            {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider