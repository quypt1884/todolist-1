import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <ul className='flex m-0 p-0 list-none w-1/2 m-auto'>
        <li className='m-3'><Link to="/">Function</Link></li>
        <li className='m-3'><Link to="class">Class</Link></li>
        <li className='m-3'><Link to="usereducer">Usereducer</Link></li>
        <li className='m-3'><Link to="usereducer-immer">Usereducer-Immer</Link></li>
    </ul>

    <Outlet/>
    </>
  )
}

export default Header