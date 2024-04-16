'use client'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  const {status, data} = useSession()
  return (
    <div className='flex gap-4 bg-slate-200 p-5'>
        <Link href={"/"}>Home</Link>
        <Link href={"/products"}>Products</Link>
        <Link href={"/users"}>Users</Link>
        <Link href={"/admin"}>Admin</Link>
        {status === "authenticated" ? <p>{data.user!.name}</p> : <Link href={"/api/auth/signin"}>Login</Link> }
        {status === "authenticated" ? <Link href={"/api/auth/signout"}>Sign Out</Link> : null}
        
    </div>
  )
}

export default NavBar