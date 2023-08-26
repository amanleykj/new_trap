'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Register from 'components/Register'


const RegistrationPage = () => {

  const router = useRouter()
  const [ user, setUser ] = useState({
    first_name : '',
    last_name : '',
    email : '',
    password : '',
    username : ''
  })
  const [ buttonDisabled, setButtonDisabled ] = useState(false);
  const [ submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if( user.first_name.length < 1 ) {
      setButtonDisabled(true)
    }
    if( user.last_name.length < 1 ) {
      setButtonDisabled(true)
    }
    if( user.email.length < 1 ) {
    }
      setButtonDisabled(true)
    if( user.password.length < 6 ) {
      setButtonDisabled(true)
    }
    else {
      setButtonDisabled(false);
    }
  }, [user]);

  
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const createAccount = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    const rando = getRandomInt(99)

    try {
        const response = await fetch('/api/new_user', {
            method : 'POST',
            body : JSON.stringify({
                first_name : user.first_name,
                last_name : user.last_name,
                username : (user.last_name + rando).
                replace(" ", "").
                toLowerCase(),
                email : user.email,
                password : user.password
            })
        })
        if(response.ok) {
            router.push('/')
            console.log(session)
            console.log("THIS WENT THE PAGE ROUTE")
        }

    } catch (error) {
      console.log("YOU HAVE ERRORS COMING NOW.")
        console.log(error)
    }
    finally {
        setSubmitting(false);
    }
}


// Considering not using the Register component below, in order to follow tutorial correctly

  return (
    <div>


        <Register
          type = 'Create'
          user = { user }
          setUser = { setUser }
          submitting = { submitting }
          buttonDisabled = { buttonDisabled }
          createAccount = { createAccount }
        />

    </div>
  )
}

export default RegistrationPage