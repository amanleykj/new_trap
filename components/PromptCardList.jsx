'use client'

import { useState, useEffect } from 'react'
import PromptCard from '@components/PromptCard'

const PromptCardList = ({ data }) => {
    return (
    <div className='mt-16 prompt_layout'>
    {data.map(( value, index )  => (
        <PromptCard
        key = {value._id}
        order = {value}
        />
    ))}
    </div>
    )
}

export default PromptCardList