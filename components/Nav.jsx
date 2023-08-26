'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'

const Nav = () => {

    const { data : session } = useSession();

    const [ providers, setProviders ] = useState(null);
    const [ toggleDropdown, setToggleDropdown ] = useState(true);

    useEffect(() => {
        const setUpProviders = async () => {
            const response = await getProviders();
            setProviders(response);
        }
        setUpProviders();
    }, [])

    return (
    <nav className='flex-between w-full mb-16 pt-3'>
        <Link href="/" className="flex gap-2 flex-center">
            <Image src = '/assets/icons/trap_small.png' 
            alt = 'logo here' 
            width={50} 
            height={50} 
            className='object-contain rounded-full'/>
            <p className='logo_text'>TraPWanGz</p>
        </Link>

        {/* below can be used to test if session, or other variables, are active or populated */}
        {/* {alert(session?.user)} */}

        {/* {alert(providers)} */}

        {/* Desktop navigation first */}
        {/* This is for providers session?.user */}
        <div className='sm:flex hidden'>
            { session?.user ? 
            (
            <div className='flex gap-3 md:gap-5'>
                
                <Link 
                    href = "/create-order"
                    className='black_btn'>
                Create Order
                </Link>

                <Link 
                    href = "/profile"
                    className='black_btn'>
                My Profile
                </Link>

                <button 
                    type = "button" 
                    className="outline_btn" 
                    onClick={signOut}>
                Logout
                </button>

                <Link href="/profile">
                    <Image
                        src = { session?.user.image } 
                        className='rounded-full' 
                        width=  {45} 
                        height={45} 
                        alt = "profile image here"/>
                </Link>

            </div>
            ) 
            : 
            (
            <div>
                <div className='flex gap-3 md:gap-5'>
                    {providers &&
                        Object.values(providers).map((provider) =>
                        (
                        <button 
                            type = "button" 
                            key = {provider.name}
                            onClick={() => signIn(provider.id)}
                            className='black_btn'>
                        Create account with Google
                        </button>
                        ))
                    }
                    <Link className='outline_link' href = "/login">Log In</Link>
                    {/* <button type = "button" className="outline_btn" onClick={signIn}>Log In</button> */}
                    <Link className='outline_link' href = "/register">Make an Account</Link>
                    {/* <button type = "button" className="outline_btn" onClick={signIn}>Logout</button> */}
                </div>
            </div>
            )
            }
        </div>
{/*         
        Mobile navigation below */}
        {/* LATEST: The onclick for the image below is immediately going to /profile
        I want for it to show the dropdown menu, with multiple options */}
        <div className='sm:hidden flex relative'>
            { session?.user ? (
                <div className='flex'>
                    <Image
                    src = '/assets/icons/trap_small.png' 
                    className='rounded-full' 
                    width={45} 
                    height={45} 
                    alt = "your profile image"
                    onClick={() => setToggleDropdown((prev) => !prev)}
                />

                {toggleDropdown && (
                <div className='dropdown'>

                    <Link 
                        href = "/profile" 
                        image = { session?.user.image }
                        className='dropdown_link' 
                        onClick={() => setToggleDropdown((false))}>
                    My Profile
                    </Link>

                    <Link 
                        href = "/create-order" 
                        className='dropdown_link' 
                        onClick={() => setToggleDropdown(false)}>
                    Create Order
                    </Link>

                    <button 
                        type = "button" 
                        onClick={()=> {
                            setToggleDropdown(false);
                            signOut();
                            }}
                        className="mt-5 w-full black_btn">
                    Sign Out
                    </button>

                </div>
                )}
                </div>
            ) 
            : 
            (
            <>
                {providers &&
                    Object.values(providers).map((provider) => (
                    <button 
                    type = "button" 
                    key = {provider.name}
                    onClick={() => signIn(provider.id)}
                    className='black_btn'>
                        Sign In
                    </button>
                    ))}
            </>
            )}
        </div>
    </nav>
    )
}

export default Nav;