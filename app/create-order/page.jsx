'use client'

import React from 'react'
import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import OrderForm from '@components/OrderForm'
import OrderForm2 from '@components/OrderForm2'

const CreateOrder = () => {
    
    const [ submitting, setSubmitting] = useState(false);

    const [ post, setPost ] = useState({
        order : '',
        tag : ''
    })

    const createOrder = async (e) => {

    }

    return (
        
    <div>

        <OrderForm2
        type = 'Create'
        post = {post}
        setPost = {setPost}
        submitting = {submitting}
        handleSubmit = {createOrder}
        />

    </div>
    
    )
}

export default CreateOrder;