'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'

const Footer = () => {

    return (
    <nav className='flex-between w-full mb-3 pt-3'>

        <div className='left_footer'> 
            <Link href="/" className="flex gap-2 flex-left">
            
                Privacy Policy
            </Link>
            <Link href="/" className="flex gap-2 flex-left">
            Terms & Conditions
            </Link>
        </div>


    {/* Desktop navigation first */}
        <div className='center_footer'>    
                <Link 
                href = "/subscribe"
                className='flex-center hover:-blue-300'
                >
                Subscribe to Newsletter
                </Link>

                <h3>
                Copyright © 2023 TraPWanGz LLC - All Rights Reserved
                </h3>
        </div>

        <div className='right_footer'>
            <div className='flex flex-direction:row'>
                <Link href="https://www.instagram.com/trapwangz206/" className="flex gap-2 flex-center">
                    <Image src = '/assets/icons/ig.png' 
                    alt = 'logo here' 
                    width={35} 
                    height={35} 
                    className='object-contain rounded-full'/>
                <br />
                </Link>
                <Link href="/" className="flex gap-2 flex-center">
                    <Image src = '/assets/icons/fb.png' 
                    alt = 'logo here' 
                    width={35} 
                    height={35} 
                    className='object-contain rounded-full'/>
                </Link>
            </div>
                <h2>
                    253-555-5555
                </h2>
        </div>

    {/* Mobile navigation below */}

        <div className='sm:hidden flex relative'>
        
            <div className='flex'>
                <Image
                src = '/assets/icons/trap_small.png' 
                className='rounded-full' 
                width={45} 
                height={45} 
                alt = "your profile image"
                onClick={() => setToggleDropdown((prev) => !prev)}
            />
            </div>

            <div className='dropdown'>

                <Link 
                    href = "/profile" 

                    className='dropdown_link' >

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
        </div>
        
    </nav>
)
}

export default Footer;