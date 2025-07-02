import React from 'react'

const Login = () => {
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 rounded-xl border-black p-20'>
            <form className='flex flex-col items-center justify-center'>
                <input required className="outline-none bg-transparent border-2 text-xl border-black-600 py-3 px-5 rounded-full placeholder:text-grey"type="email" placeholder='Enter your email' />
                <input required className="outline-none bg-transparent border-2 text-xl border-black-600 py-3 px-5 mt-3 rounded-full placeholder:text-grey"type="password"placeholder='Enter your password'/>
                <button className="text-white bg-black outline-none border-2 text-xl border-black-600 py-1 px-3 mt-3 rounded-full placeholder:text-grey">Log in</button>
            </form>
        </div>
    </div>
  )
}

export default Login