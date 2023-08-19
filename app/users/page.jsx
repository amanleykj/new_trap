'use client'
import React from 'react'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const Users = () => {

    [ allUsers, setAllUsers ] = useState([])

    useEffect(() => {
        const fetchUsers = async () => {
        const response = await fetch('/api/all_users');
        const data = await response.json();
        setAllUsers(data)
    }
    fetchUsers();

    }, [])



    return (
    <div>
        <h1>Information here</h1>
        <div>
            
        <table className='table table-striped'>
                <thead>
                    <tr className='table-primary'>
                        <th>Verified</th>
                        <th><h4>Person First Name</h4></th>
                        <th><h4>Person Last Name</h4></th>
                        <th><h4>Person Notes</h4></th>
                    </tr>
                </thead>
                <tbody>
        {
        allUsers.sort().map((value, index) => (
            <tr key = {index}>
                { value.isVerified === true ?
                <td>Yes</td>
                :
                <td>No</td>
                }
                <td className='table-primary'><Link to = {`/`}>{value.first_name}</Link></td>
                <td className='table-primary'>{value.last_name}</td>
                <td className='table-primary'>{value.notes}</td>
            </tr>
        ))
    }
        </tbody>
        </table>

        </div>
        

    </div>
    )
}

export default Users