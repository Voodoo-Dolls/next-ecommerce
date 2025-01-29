import Link from "next/link"
import Menu from "./Menu"
import Image from "next/image"
import SearchBar from "./SearchBar"
import NavIcons from "./NavIcons"


const Navbar = () => {
    return (
        <header className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
            <div className="container flex items-center justify-between h-full md:hidden">

                {/* MOBILE */}
                <Link href={`/`}>
                    <div className="text-2xl tracking-wide">LAMA</div>
                </Link>
                <Menu />
            </div>
            {/* BIGGER SCREENS */}
            <div className="hidden md:flex items-center h-full justify-between gap-8">
                {/* LEFT */}
                <div className="w-1/3 xl:w-1/2 flex items-center gap-12">
                    <Link href={`/`} className="flex items-center gap-3">
                        <Image src="/logo.png" width={24} height={24} alt="Logo" />
                        <div className="text-2xl tracking-wide">LAMA</div>
                    </Link>
                    <div className="hidden xl:flex gap-4">
                        <Link href={`/`}>Shop</Link>
                        <Link href={`/`}>Deals</Link>
                        <Link href={`/`}>About</Link>
                        <Link href={`/`}>Contact</Link>
                    </div>
                </div>
                {/* RIGHT */}
                <div className="w-2/3 flex items-center justify-between gap-8 xl:w-1/2">
                    <SearchBar />
                    <NavIcons />
                </div>
            </div>
        </header>
    )
}

export default Navbar