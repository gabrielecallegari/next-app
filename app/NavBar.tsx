import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <div className='flex gap-4 bg-slate-200 p-5'>
        <Link href={"/"}>Home</Link>
        <Link href={"/products"}>Products</Link>
        <Link href={"/users"}>Users</Link>
        <Link href={"/admin"}>Admin</Link>
    </div>
  )
}

export default NavBar