'use client'

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import OrderForm2 from '@components/OrderForm2';

const UpdateOrder = () => {

    const router = useRouter();
    const searchParams = useSearchParams();
    const orderId = searchParams.get('id');
    const [ submitting, setSubmitting ] = useState(false);
    const [ order, setOrder ] = useState({
        combo : '',
        sauce : '',
        side : '',
        drink : '',
        notes: ''
    })

    useEffect(() => {
        const getOrderDetails = async () => {
        const response = await fetch(`/api/order/${orderId}`)
        const data = await response.json();
        setOrder({
            combo : data.combo,
            sauce : data.sauce,
            side : data.side,
            drink : data.drink,
            notes : data.notes
        })
        }
        if(orderId) getOrderDetails();
    }, [orderId])

    const updateOrder = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        if(!orderId) {
            return alert("Missing order ID. Where is that...")
        }
        try {
            const response = await fetch(`/api/order/${orderId}`, {
                method : 'PATCH',
                body : JSON.stringify({
                    combo : order.combo,
                    sauce : order.sauce,
                    side : order.side,
                    drink : order.drink,
                    notes : order.notes
                })
            })
            if(response.ok) {
                router.push('/profile')
            }
        } catch (error) {
            console.log(error)
        }
        finally {
            setSubmitting(false);
        }
    }

    return (
        <OrderForm2
        type = 'Update'
        order = {order}
        setOrder = {setOrder}
        submitting = {submitting}
        handleSubmit = {updateOrder}
        />
    )
}

export default UpdateOrder