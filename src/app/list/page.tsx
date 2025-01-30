import Filter from "@/components/CategoryList/Filter/Filter"
import ProductList from "@/components/ProductList/ProductList"
import Image from "next/image"

const ListPage = () => {
    return (
        <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
            {/* CAMPAIGN */}
            <div className="hidden sm:flex bg-pink-50 px-4 justify-between h-64">
                <div className="w-2/3 flex flex-col items-center gap-8 justify-center">
                    <h1 className="text-4xl font-semibold leading-[48px] text-gray-700">
                        Grab up to 50% off on
                        <br />
                        Selected Products
                    </h1>
                    <button className="rounded-3xl bg-lama text-white w-max py-3 px-5 text-sm">Buy Now</button>
                </div>
                <div className="relative w-1/3">
                    <Image src="/woman.png" fill alt="" className="object-contain" />
                </div>
            </div>
            {/* FILTER */}
            <Filter />
            {/* PRODUCTS */}
            <h1 className="text-xl mt-12 font-semibold">Shoes For You!</h1>
            <ProductList />
        </div>
    )
}

export default ListPage