'use client'

import { useEffect, useState } from 'react'

import { useRouter, useSearchParams } from 'next/navigation'
import OrderForm2 from '@components/OrderForm2'
import { isDynamicMetadataRoute } from 'next/dist/build/analysis/get-page-static-info'

const UpdateOrder = () => {

    const router = useRouter();

    const { data : session } = useSession(); 

    const searchParams = useSearchParams();

    const orderId = searchParams.get('id');
    
    const [ submitting, setSubmitting] = useState(false);

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
        if(orderId) getOrderDetails()
    }, [orderId])
    
    const [ order, setOrder ] = useState({
        combo : '',
        sauce : '',
        side : '',
        drink : '',
        notes: ''
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
                    timestamps : dateTime
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


  return (
    <OrderForm2
    type = 'Update'
    order = {order}
    setOrder = {setOrder}
    submitting = {submitting}
    handleSubmit = {createOrder}
    />
    
  )
}

export default UpdateOrder