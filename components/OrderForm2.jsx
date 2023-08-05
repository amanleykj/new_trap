
import Link from 'next/link'

const OrderForm2 = ({type, post, setPost, submitting, handleSubmit}) => {
    return (
        <section className='w-full max-w-full flex-start flex-col'>
            <h1 className='head_text text-left'>
                <span className='blue_gradient'>
                {type} Post
                </span>
            </h1>
            <p className='desc text-left max-w-md'>
                {type} and share your orders with other trappas and trappets,
                and really get your food on.
            </p>

            <form onSubmit={handleSubmit}
            className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'
            >
                <label>
                    <span className='font-satoshi font-semibold text-base text-gray-700'>
                        Your Order
                    </span>
                    <textarea value={post.order}
                    onChange={(e) => setPost({...post, order : e.target.value })}
                    placeholder='Your order is here'
                    required
                    className='form_textarea'
                    >

                    </textarea>
                </label>
            </form>

        </section>
    )
}

export default OrderForm2