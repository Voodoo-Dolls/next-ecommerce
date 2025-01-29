'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import CartModal from './CartModal'

const NavIcons = () => {
    const [isProfileOpen, setIsProfileOpen] = useState(false)
    const [isCartOpen, setIsCartOpen] = useState(false)
    const router = useRouter()
    // TEMP
    const isLoggedIn = false
    const handleProfile = () => {
        if (!isLoggedIn) {
            router.push('/login')
        }
        setIsProfileOpen(prev => !prev)

    }
    return (
        <div className='flex items-center gap-4 xl:gap-6 relative'>
            <Image
                src="/profile.png"
                width={22}
                height={22}
                alt="Profile"
                onClick={handleProfile}
                className='cursor-pointer'
            />
            {isProfileOpen && (
                <div className='absolute p-4 rounded-md top-12 left-0 text-sm z-10 shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
                    <Link href="/profile">Profile</Link>
                    <div className='mt-2 cursor-pointer'>Logout</div>
                </div>
            )}
            <Image src="/notification.png" width={22} height={22} alt="Notification" />
            <div className='relative cursor-pointer'>

                <Image
                    src="/cart.png"
                    width={22}
                    height={22}
                    alt="Cart"
                    onClick={() => setIsCartOpen(prev => !prev)}
                />
                <div className='absolute -top-4 -right-4 h-6 w-6 bg-lama rounded-full text-white text-sm flex items-center justify-center'>2</div>
            </div>
            {isCartOpen && (
                <CartModal />
            )}
        </div>
    )
}

export default NavIcons