'use client'

import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import Profile from '@components/Profile'

const MyProfile = () => {

    const router = useRouter();

    const { data : session } = useSession();

    const [ orders, setOrders ] = useState([])

    const handleEdit = (order) => {
        router.push(`/update-order?id=${order._id}`)

    }

    const handleDelete = async (order) => {
        const hasConfirmed = confirm("Are you sure you want to delete this order? There's no going back if you click this button.")
        if(hasConfirmed) {
            try {
                await fetch(`/api/order/${order._id.toString()}`, {
                    method : 'DELETE'
                });
                const filteredOrders = orders.filter((o) => o._id  !== order._id);
                setOrders(filteredOrders)
            }
            catch (error) {
                console.log(error)
            }
        }
    }

    useEffect(() => {
        const fetchOrders = async () => {
            const response = await fetch(`/api/users/${session?.user.id}/orders`);
            const data = await response.json();
            setOrders(data)
    
        }
        if(session?.user.id) 
        fetchOrders();
    
    }, [])

    return (
        <Profile
        name = "My"
        desc = "Welcome to your personal profile page."
        data = {orders}
        handleEdit = { handleEdit }
        handleDelete = { handleDelete }
        />
    )
}

export default MyProfile