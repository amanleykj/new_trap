'use client'

import { useRouter } from 'next/navigation'
import { useState, useEffect, React } from 'react'
import axios from 'axios'
import { Toast } from 'react-hot-toast'

const LoginPage = () => {

    const [ loginUser, setLoginUser ] = useState({
        email : '',
        password : ''
    })
    const [ loading, setLoading ] = useState(true)
    const [ buttonDisabled, setButtonDisabled ] = useState(false);
    const router = useRouter()

    useEffect(() => {
        if(loginUser.email.length < 1 ) {
        setButtonDisabled(true)
        }
        if(loginUser.password.length < 6) {
            setButtonDisabled(true)
        }
        else {
        setButtonDisabled(false);
        }
    }, [loginUser]);

    const onLogin = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/login", loginUser);
            console.log("Login sucessful.", response.data );
            router.push('/profile');
        }
        catch (error) {
            console.log("Login failed.", error.message );
        }
        finally {
            setLoading(false);
        }
    }
    
    return (
    <div>

    <h1>{loading ? "Processing..." : "Log in here"}</h1>

    <form className="w-full max-w-lg">
        <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
            Email
            </label>
            <input 
            class="appearance-none block w-full bg-gray-200 text-gray-700 
            border border-red-500 rounded py-3 px-4 mb-3 leading-tight 
            focus:outline-none focus:bg-white" 
            id="grid-first-name" 
            type="text" 
            // value = {loginUser.email}
            onChange={(e) => setLoginUser({...loginUser, email : e.target.value})}
            placeholder="you@mail.com"/>
            </div>

            <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
            Password
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 
            border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none 
            focus:bg-white focus:border-gray-500" 
            id="grid-last-name" 
            type="password" 
            // value = {loginUser.password}
            onChange={(e) => setLoginUser({...loginUser, password : e.target.value})}
            placeholder="******"/>
            </div>
        </div>

    <div
        >{ buttonDisabled ? 
        ( <>
            <p className='bg-red-500 hover:bg-red-700 text-white 
            font-bold py-2 px-4 rounded text-center btn'
            >
            Enter the information above
            </p>
            </> 
        )
        : 
        (
            <>
            <button 
                type = "button"
                onClick={ onLogin } 
                className="mt-5 w-full black_btn">
                Login
            </button>
            </>

        )
        }
    </div>

    </form>

    </div>
    )
}

export default LoginPage