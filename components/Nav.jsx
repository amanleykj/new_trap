'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'

const Nav = () => {

    const isUserLoggedIn = true;

    const [ providers, setProviders ] = useState(null);

    const [ toggleDropdown, setToggleDropdown ] = useState(false);

    useEffect(() => {
        const setProviders = async() => {
            const response = await getProviders();
            setProviders(response);
        }
    })

    return (
    <nav className='flex-between w-full mb-16 pt-3'>
        <Link href="/" className="flex gap-2 flex-center">
            <Image src = '/assets/icons/trap_small.png' 
            alt = 'logo here' 
            width={30} 
            height={30} 
            className='object-contain'/>
            <p className='logo_text'>TraPWangZ</p>
        </Link>

        {/* Desktop navigation first */}
        <div className='sm:flex hidden'>
            {isUserLoggedIn ? 
            (
            <div className='flex gap-3 md:gap-5'>
                <Link href = "/create-order" className='black_btn'>Create Order</Link>
                <button type = "button" className="outline_btn" onClick={signOut}>Logout</button>
                <Link href="/profile">
                    <Image
                    src = "/assets/images/profile.jpg" 
                    className='rounded-full' 
                    width={30} 
                    height={30} 
                    alt = "profile image here"/>
                </Link>
            </div>
            ) 
            : 
            (
                <>
                {providers &&
                    Object.values(providers).map((provider) =>
                    (
                    <button 
                    type = "button" 
                    key = {provider.name}
                    onClick={() => signIn(provider.id)}
                    className='black_btn'>
                        Sign In
                    </button>
                    ))
                }
                
            <div className='flex gap-3 md:gap-5'>
                <Link href = "/login">Log In</Link>
                <button type = "button" className="outline_btn" onClick={signIn}>Log In</button>
                <Link href = "/register">Make an Account</Link>
                <button type = "button" className="outline_btn" onClick={signIn}>Logout</button>
            </div>
            </>
            )
            }
        </div>
{/*         
        Mobile navigation below */}
        {/* LATEST: The onclick for the image below is immediately going to /profile
        I want for it to show the dropdown menu, with multiple options */}
        <div className='sm:hidden flex'>
            {isUserLoggedIn ? (
                <div className='flex'>
                    <Image
                    src = "/assets/images/profile.jpg" 
                    className='rounded-full' 
                    width={30} 
                    height={30} 
                    alt = "profile image here"
                    onClick={()=> setToggleDropdown((prev) => !prev)}
                    />
                    {toggleDropdown && (
                        <div className='dropdown'>
                            <Link 
                            href = "/profile" 
                            className='dropdown_link' 
                            onClick={() => setToggleDropdown(false)}>
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
                                }}>
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

export default Nav