'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Register from '@components/Register'

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
    if( user.password.length < 6 ) {
      setButtonDisabled(true)
      if( user.username.length < 5 ) {
        setButtonDisabled(true)
      }
    }
    else {
      setButtonDisabled(false);
    }
  }, [user]);

  const createAccount = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
        const response = await fetch('/api/new_user', {
            method : 'POST',
            body : JSON.stringify({
                first_name : user.first_name,
                last_name : user.last_name,
                email : user.email,
                password : user.password,
                username : user.username
            })
        })
        if(response.ok) {
            router.push('/')
        }

    } catch (error) {
        console.log(error)
    }
    finally {
        setSubmitting(false);
    }
}


// Considering not using the Register component below, in order to follow tutorial correctly

  return (
    <div>
        <h1 className='text-center head_text'>Registration page here</h1>
        <br />

        <Register
          type = 'Create'
          user = { user }
          setUser = { setUser }
          submitting = { submitting }
          buttonDisabled = { buttonDisabled }
          handleSubmit = { createAccount }
        />

    </div>
  )
}

export default RegistrationPage