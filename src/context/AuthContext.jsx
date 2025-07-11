import React from 'react'

const AuthContext = ({children}) => {
  // useEffect(() => { // if i want to see a how the data is stored i array
  //   setlocalStorage()

  //   getlocalStorage()
    
  // }, )
  return (
    <div>{children}</div>
  )
}

export default AuthContext