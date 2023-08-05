import React from 'react'
import Link from 'next/link'


// .form_textarea {
//     @apply w-full flex rounded-lg h-[200px] mt-2 p-3 text-sm text-gray-500 outline-0;
//   }

//   .form_input {
//     @apply w-full flex rounded-lg mt-2 p-3 text-sm text-gray-500 outline-0;
//   }

const OrderForm = ({type, post, setPost, submitting, handleSubmit}) => {
    return (
        <div>

<form class="w-full max-w-lg">

    <div class="relative">
        
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        Combo Size
        </label>
        <select class="block appearance-none w-full bg-gray-200 border border-gray-200 
        text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white 
        focus:border-gray-500" id="grid-state">
        <option>6-piece</option>
        <option>10-piece</option>
        <option>15-piece</option>
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 
        flex items-center px-2 text-gray-700">
        <svg class="w-3 h-3 text-gray-800 dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" 
        fill="none" viewBox="0 0 10 20">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" 
        stroke-width="1.5" 
        d="M10.335 6.514 6.91 1.464a1.122 1.122 0 0 0-1.818 0l-3.426 5.05a.988.988 0 0 0 .91 1.511h6.851a.988.988 0 0 0 .91-1.511Zm-8.67 6.972 3.426 5.05a1.121 1.121 0 0 0 1.818 0l3.426-5.05a.988.988 0 0 0-.909-1.511H2.574a.987.987 0 0 0-.909 1.511Z"/>
        </svg>
        </div>
        
    </div>

    <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        Sauce
        </label>
        <select class="block appearance-none w-full bg-gray-200 border border-gray-200 
        text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white 
        focus:border-gray-500" id="grid-state">
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

        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        Side
        </label>
        <select class="block appearance-none w-full bg-gray-200 border border-gray-200 
        text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white 
        focus:border-gray-500" id="grid-state">
        <option>French Fries</option>
        <option>Mac & Cheese</option>
        <option>Baked Beans</option>
        </select>
        </div>
    </div>

    <div class="flex flex-wrap -mx-3 mb-2">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        Drink
        </label>
        <select class="block appearance-none w-full bg-gray-200 border border-gray-200 
        text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white 
        focus:border-gray-500" id="grid-state">
        <option>Sprite</option>
        <option>Coke</option>
        <option>Trap Juice</option>
        <option>(none)</option>
        </select>
        </div>

        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        Delivery Day
        </label>
        <select class="block appearance-none w-full bg-gray-200 border border-gray-200 
        text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white 
        focus:border-gray-500" id="grid-state">
        <option>Friday</option>
        <option>Saturday</option>
        </select>
        </div>
    <button className='bg-yellow-500 hover:bg-purple-700 text-white font-bold py-2 px-8 rounded text-center btn'>
    Order Confirmation Screen
    </button>
    </div>

</form>

    </div>
  )
}

export default OrderForm