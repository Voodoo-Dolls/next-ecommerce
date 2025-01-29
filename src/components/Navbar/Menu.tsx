'use client'

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const Menu = () => {
    const [open, setOpen] = useState(false)
    return (
        <div>
            <Image src="/menu.png" width={30} height={30} onClick={() => setOpen(prev => !prev)} alt="Menu Button" />
            {open && (
                <div className="absolute bg-black text-white left-0 top-20 w-full flex flex-col h-[calc(100vh-80px)] gap-8 justify-center text-xl z-10 text-center">
                    <Link href="/">Shop</Link>
                    <Link href="/">Deals</Link>
                    <Link href="/">About</Link>
                    <Link href="/">Contact</Link>
                    <Link href="/">Logout</Link>
                    <Link href="/">Cart(1)</Link>
                </div>
            )}
        </div>
    )
}

export default Menu