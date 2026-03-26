import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()

    return (
<div className='bg-gradient-to-r from-orange-400 to-pink-500 text-white rounded-full text-center text-2xl font-bold mx-auto w-fit px-8 py-3 shadow-lg hover:scale-105 hover:shadow-orange-300 hover:shadow-2xl transition-all duration-300 cursor-pointer animate-bounce'>
    👤 user: {userid}
</div>    )
}

export default User
