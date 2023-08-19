import Link from 'next/link'

const OrderForm2 = ({ type, order, setOrder, submitting, handleSubmit }) => {
    return (
        <section className='w-full max-w-full flex-start flex-col'>
            <h1 className='head_text text-left'>
                <span className='blue_gradient'>
                {type} Order
                </span>
            </h1>
            <p className='desc text-left max-w-md'>
                {type} an order, and then share it with other trappas and trappets
            </p>

            <form onSubmit={handleSubmit} className='mt-10 w-full max-w-2xl flex flex-col gap-1 glassmorphism'
            >
                <div className="flex flex-wrap -mx-3 mb-1 p-5">
                    <span className='font-satoshi font-semibold text-base text-gray-700'>
                    Combo Choice
                    </span>
                    <select
                    required 
                    className="block appearance-none w-full bg-gray-200 border border-gray-200 
                    text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white 
                    focus:border-gray-500" 
                    id="grid-state"
                    value = {order.combo}
                    onChange={(e) => setOrder({...order, combo : e.target.value})}
                    >
                    <option>-</option>
                    <option value = "6p">6-piece</option>
                    <option value = "10p">10-piece</option>
                    <option value = "15p">15-piece</option>
                    </select>
                </div>

                <div className="flex flex-wrap -mx-3 mb-1 p-5">

                        <span className='font-satoshi font-semibold text-base text-gray-700'>
                        Sauce
                        </span>
                        <select 
                        className="block appearance-none w-full bg-gray-200 border border-gray-200 
                        text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white 
                        focus:border-gray-500" 
                        id="grid-state"
                        required
                        value = {order.sauce}
                        onChange={(e) => setOrder({...order, sauce : e.target.value})}
                        >
                        <option>-</option>
                        <option>BMF</option>
                        <option>DSGB</option>
                        <option>Exotics</option>
                        <option>Trap Yak</option>
                        <option>Garlic Parm</option>
                        <option>Trapping Apple</option>
                        <option>Bad & Boujee</option>
                        <option>Henndawgs</option>
                        <option>Trap Chili</option>
                        <option>Cilantro Lime Jalapeno</option>
                        <option>Strawberry Heat</option>
                        <option>Trap Habanero</option>
                        <option>Lemon Pepper</option>
                        <option>Honey Garlic</option>
                        <option>Gold Rush</option>
                        <option>Buffalo</option>
                        <option>Ranch</option>
                        <option>24k</option>
                        </select>
                    
                </div>

            <div className="flex flex-wrap -mx-3 mb-1 p-5">
                <span className='font-satoshi font-semibold text-base text-gray-700'>
                Side
                </span>
                <select 
                className="block appearance-none w-full bg-gray-200 border border-gray-200 
                text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white 
                focus:border-gray-500" 
                id="grid-state"
                required
                value = {order.side}
                onChange={(e) => setOrder({...order, side : e.target.value})}
                >
                <option>-</option>
                <option>French Fries</option>
                <option>Mac & Cheese</option>
                <option>Baked Beans</option>
                </select>
            </div>

            <div className="flex flex-wrap -mx-3 mb-1 p-5">
                <span className='font-satoshi font-semibold text-base text-gray-700'>
                Drink
                </span>
                <select 
                className="block appearance-none w-full bg-gray-200 border border-gray-200 
                text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white 
                focus:border-gray-500" 
                id="grid-state"
                required
                value = {order.drink}
                onChange={(e) => setOrder({...order, drink : e.target.value})}
                >
                <option>-</option>
                <option>Sprite</option>
                <option>Coke</option>
                <option>Trap Juice</option>
                </select>
            </div>

            <div className="flex flex-wrap -mx-3 mb-1 p-5">
                <span className='font-satoshi font-semibold text-base text-gray-700'>
                Notes
                </span>
                <textarea
                value = {order.notes}
                onChange={(e) => setOrder({...order, notes : e.target.value})}
                placeholder='write any special requests or other notes about your order here'
                className='form_textarea'
                >

                </textarea>

            </div>

                <div className='flex-end mx-3 mb-5 gap-4'>
                    <Link href = "/" className='text-gray-500'>Cancel</Link>
                <button 
                type='submit'
                disabled={submitting}
                className='px-5 py-4 text-big bg-primary-orange rounded hover:rounded-lg rounded-full text-white'
                >
                    {submitting ? `${type}...` : type}
                </button>
                </div>

            </form>

        </section>
    )
}

export default OrderForm2