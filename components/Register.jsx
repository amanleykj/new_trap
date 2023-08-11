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


  const onSignUp = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/new_user", user);
      console.log("Signup success here.", response.data);
      session
      router.push('/');
    }
    catch (error) {
      console.log("Signup has failed.", error.message);
    }
    finally {
      setLoading(false);
    }
  }
  
  useEffect(() => {
    const setUpProviders = async () => {
        const response = await getProviders();
        setProviders(response);
    }
    setUpProviders();
}, [])

  return (
    <div>
      <h1>{loading ? "Sign up now" : "Processing now..."}</h1>

      <div className='flex gap-3 md:gap-5 '>
        {providers &&
            Object.values(providers).map((provider) =>
            (
            <button 
                type = "button" 
                key = {provider.name}
                onClick={() => signIn(provider.id)}
                className='black_btn text-red-500'>
            Click here to register with Google account
            </button>
            ))
        }
      </div>
      
      <form className="w-full max-w-lg">
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        First Name
      </label>
      <input 
      class="appearance-none block w-full bg-gray-200 text-gray-700 
      border border-red-500 rounded py-3 px-4 mb-3 leading-tight 
      focus:outline-none focus:bg-white" 
      id="grid-first-name" 
      type="text" 
      value = {user.first_name}
      onChange={(e) => setUser({...user, first_name : e.target.value})}
      placeholder="Jane"/>
    
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
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

  <div className="w-full md:w-1/2 px-3">
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
    </div>

    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        Email
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 
      border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none 
      focus:bg-white focus:border-gray-500" 
      id="grid-last-name" 
      type="text" 
      value = {user.email}
      onChange={(e) => setUser({...user, email : e.target.value})}
      placeholder="chosenone@betty.com"/>
    </div>

  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
        Password
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 
      border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none 
      focus:bg-white focus:border-gray-500" 
      id="grid-password" 
      type="password" 
      value = {user.password}
      onChange={(e) => setUser({...user, password : e.target.value})}
      placeholder="******"/>
      <p className="text-gray-600 text-xs italic">Make sure this is at least six characters long.</p>
    </div>
  </div>

  {/* <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
        Repeat Password
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 
      border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none 
      focus:bg-white focus:border-gray-500" 
      id="grid-password" 
      type="password" 
      value = { confirmPassword }
      onChange={(e) => setConfirmPassword({ confirmPassword : e.target.value})}
      // attempting to do password confirmation on the client side entirely; no backend stuff
      // onChange={(e) => setUser({...user, password : e.target.value})}
      placeholder="************"/>
      
    </div>
  </div> */}


{/* consider just deleting the section below; the Order model shoud specify dropoff location */}
  {/* <div className="flex flex-wrap -mx-3 mb-2">
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
        City
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Renton"/>
    </div>
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
        State
      </label>
      <div className="relative">
        <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
          <option>Washington</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
        Zip
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="98058"/>
    </div>
  </div> */}
  <div
  >{ buttonDisabled ? 
  ( <>
      <p className='bg-red-500 hover:bg-red-700 text-white 
      font-bold py-2 px-4 rounded text-center btn'
      >
      Please finish filling out the form
      </p>
    </> 
  )
  : 
  (
    <>
      <button 
        type = "button"
        onClick={onSignUp} 
        className="mt-5 w-full black_btn">
        Register Account
      </button>
    </>

  )
  }
    </div>

</form>

    </div>
  )
}

export default Register