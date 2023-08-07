'use client'

import React from 'react'
import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import OrderForm from '@components/OrderForm'
import OrderForm2 from '@components/OrderForm2'

const CreateOrder = () => {
    
    const [ submitting, setSubmitting] = useState(false);

    const [ order, setOrder ] = useState({
        order : '',
        tag : ''
    })

    const createOrder = async (e) => {
        e.preventDefault();
        setSubmitting(true);

        try {
            const response = await fetch('/api/order/new', {
                method : 'POST',
                body : JSON.stringify({
                    combo : order.combo,
                    sauce : order.sauce,
                    side : order.side,
                    drink : order.drink,
                    notes : order.notes,
                    userId : session.user.id,
                    tag : order.tag
                })
            })

        } catch (error) {

        }

    }

    return (
        
    <div>

        <OrderForm2
        type = 'Create'
        order = {order}
        setOrder = {setOrder}
        submitting = {submitting}
        handleSubmit = {createOrder}
        />

    </div>
    
    )
}

export default CreateOrder;