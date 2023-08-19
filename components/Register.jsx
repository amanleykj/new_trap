'use client'

import { useRouter } from 'next/navigation'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'
import axios from 'axios'

const Register = ({ type, user, setUser, submtting, buttonDisabled, createAccount }) => {

  const [ providers, setProviders ] = useState(null);
  const router = useRouter();
  const [ loading, setLoading ] = useState(true)
  const [ confirmPassword, setConfirmPassword ] = useState('')
  const { data : session } = useSession();


  // const onSignUp = async () => {
  //   try {
  //     setLoading(true);
  //     const response = await axios.post("/api/new_user", user);
  //     console.log("Signup success here.", response.data);
  //     session
  //     router.push('/');
  //     console.log("THIS WENT THE COMPONENT ROUTE.")
  //   }
  //   catch (error) {
  //     console.log("Signup has failed.", error.message);
  //   }
  //   finally {
  //     setLoading(false);
  //   }
  // }
  
  useEffect(() => {
    const setUpProviders = async () => {
        const response = await getProviders();
        setProviders(response);
    }
    setUpProviders();
}, [])

  return (
  <div>
      <h1 className='smallhead_text text-center text-red-400'>{loading ? "Sign up now" : "Processing now..."}</h1>

  <form className="w-full max-w-lg">
    <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
          First Name
        </label>
        <input 
        className="appearance-none block w-full bg-gray-200 text-gray-700 
        border border-red-500 rounded py-3 px-4 mb-3 leading-tight 
        focus:outline-none focus:bg-white" 
        id="grid-first-name" 
        type="text" 
        value = {user.first_name}
        onChange={(e) => setUser({...user, first_name : e.target.value})}
        placeholder="Jane"/>
      
      </div>
      <div className="w-full md:w-1/2 px-3">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
          Last Name
        </label>
        <input className="appearance-none block w-full bg-gray-200 text-gray-700 
        border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none 
        focus:bg-white focus:border-gray-500" 
        id="grid-last-name" 
        type="text" 
        value = {user.last_name}
        onChange={(e) => setUser({...user, last_name : e.target.value})}
        placeholder="Doe"/>
      </div>
    </div>


{/* Taken out; instead want to auto-generate username based on other inputs */}
  {/* <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        Username
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 
      border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none 
      focus:bg-white focus:border-gray-500" 
      id="grid-last-name" 
      type="text" 
      value = {user.username}
      onChange={(e) => setUser({...user, username : e.target.value})}
      placeholder="Doe"/>
    </div> */}

<div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
          Email
        </label>
        <input 
        className="appearance-none block w-full bg-gray-200 text-gray-700 
        border border-red-500 rounded py-3 px-4 mb-3 leading-tight 
        focus:outline-none focus:bg-white" 
        id="grid-first-name" 
        type="text" 
        value = {user.email}
        onChange={(e) => setUser({...user, email : e.target.value})}
        placeholder="hello@site.com"/>
      
      </div>
      <div className="w-full md:w-1/2 px-3">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
          Password
        </label>
        <input className="appearance-none block w-full bg-gray-200 text-gray-700 
        border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none 
        focus:bg-white focus:border-gray-500" 
        id="grid-last-name" 
        type="password" 
        value = {user.password}
        onChange={(e) => setUser({...user, password : e.target.value})}
        placeholder="******"/>
      </div>
    </div>


  <div className='text-center'
  >{ buttonDisabled ? 
  ( <>
      <span className='bg-red-500 hover:bg-red-700 text-white 
      font-bold py-2 px-4 rounded text-center'
      >
      Please finish filling out the form
      </span>
      
    </> 
  )
  : 
  (
    <>
      <button 
        type = "button"
        onClick={ createAccount } 
        className="bg-green-500 hover:bg-green-700 text-white 
        font-bold py-2 px-4 rounded text-center btn">
        Register Account
      </button>
      
    </>

  )
  }

<div className='bg-red-500 hover:bg-red-700 text-white 
      font-bold py-2 px-4 rounded text-center btn'>
    {providers &&
        Object.values(providers).map((provider) =>
        (
        <button 
            type = "button" 
            key = {provider.name}
            onClick={() => signIn(provider.id)}
            >
        Or, create account with Google
        </button>
        ))
    }
  </div>
    </div>

  </form>

  </div>
  )
}

export default Register