import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {Userid} = useParams()
    return (
        <h1 className='text-center bg-gray-600 text-white p-4'>User: {Userid}</h1>
    )
}

export default User
