import React,{useState} from 'react'

const Login = ({handleLogin}) => {

  // console.log(handleLogin)
 /*Two way binding*/ 
 
 const [email, setEmail] = useState('')
 const [password, setPassword] = useState('')
 
 
 const submitHandler=(e)=>{
  e.preventDefault()
  handleLogin(email, password)
  // console.log("Email is ",email)
  // console.log("Password is ",password)

  setEmail("")
  setPassword("")
 }
  
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 rounded-xl border-white p-20'>
            <form
            onSubmit={(e)=>{
              submitHandler(e)
            }} className='flex flex-col items-center justify-center'>
                <input
                value={email}
                onChange={(e)=>{
                  setEmail(e.target.value)

                }}
                required
                className="outline-none bg-transparent border-2 text-xl border-black-600 py-3 px-5 rounded-full placeholder:text-grey" type="email" placeholder='Enter your email'/>
                <input
                value={password}
                onChange={(e)=>{
                  setPassword(e.target.value)
                }}
                required className="outline-none bg-transparent border-2 text-xl border-black-600 py-3 px-5 mt-3 rounded-full placeholder:text-grey" type="password" placeholder ='Enter your password'/>
                <button className="text-white bg-black outline-none border-2 text-xl border-black-600 py-2 px-10 mt-5 rounded-full placeholder:text-grey">Log in</button>
            </form>
        </div>
    </div>
  )
}

export default Login