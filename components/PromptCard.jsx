'use client'

import { useState, useEffect } from "react"
import Image from "next/image"
import { useSession } from "next-auth/react"
import { usePathname, useRouter } from "next/navigation"

const PromptCard = ({ order, handleTagClick, handleEdit, handleDelete }) => {

  const [ copied, setCopied ] = useState('')

  const { data : session } = useSession();

  const pathName = usePathname();

  const router = useRouter();

  return (
    <div className="prompt_card">
      <div className="flex justify-between items-start gap-5">
        <div className="flex-1 flex justify-start items-center gap-3 cursor-pointer">
          <Image 
          src = {order.creator.image} 
          width = {35} 
          height = {35} 
          alt = "user image here" 
          className="rounded-full object-contain" 
          />

          <div className="flex flex-col">
            {/* put all the information that you want to display here about your orders */}
            <h3 className="font-satoshi font-semibold text-gray-900">{order.creator.username}</h3>

          </div>
        </div>
        <div className="copy_btn" onClick={() => {}}>
          <Image
          src = {copied === order.combo ? '/assets/icons/tick.svg' : '/assets/icons/copy.svg'}
          width = {20}
          height = {20}
          alt = "image of thing here"
          />

        </div>

      </div>

      <p className="font-inter text-md font-semibold text-red-500 p-3">
        {order.sauce} {order.combo + "iece combo"} with {order.side}, with a {order.drink}.
        </p>

        {session?.user.id === order.creator._id && pathName === '/profile' && (
          <div className="mt-5 flex-center gap-4 border-t border-gray-100 pt-3">
            <p 
            className="font-inter text-sm green_gradient cursor-pointer"
            onClick={handleEdit}>
            Edit</p>
            <p 
            className="font-inter text-sm orange_gradient cursor-pointer"
            onClick={handleDelete}>
            Delete
            </p>
          </div>
        )}
        <br />
        <div className = "flex-1 flex-col">
          <button className="green_btn">Get this Order</button>
        </div>
    </div>
  )
}

export default PromptCard