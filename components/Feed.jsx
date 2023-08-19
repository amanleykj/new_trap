'use client'

import { useState, useEffect } from 'react'
import PromptCard from '@components/PromptCard'
import PromptCardList from '@components/PromptCardList'

// const PromptCardList = ({ data, handleTagClick }) => {
//   return (
//   <div className='mt-16 prompt_layout'>
//     {data.map(( value, index )  => (
//       <PromptCard
//       key = {value._id}
//       order = {value}

//       />
//     ))}
//   </div>
//   )
// }

const Feed = () => {

  const [ searchText, setSearchText] = useState("");
  const [ orders, setOrders ] = useState([]);
  const handleSearchChange = (e) => {
    
  }

  useEffect(() => {
    const fetchOrders = async () => {
      const response = await fetch('/api/order');
      const data = await response.json();
      setOrders(data)

    }
    fetchOrders();

  }, [])

  return (
    <section className='feed'>
      <form className="relative w-full flex-center">
        <input 
        type="text" 
        placeholder='Send a shoutout!' 
        value={searchText} 
        onChange={handleSearchChange} 
        required
        className='s  earch_input peer'
        />
      </form>

      <PromptCardList
      data = {orders}
      handleTagClick = {(e) => {}}
      />

    </section>
  )
}

export default Feed