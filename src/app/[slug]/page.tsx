
import Add from "@/components/Add"
import CustomizeProducts from "@/components/CustomizeProducts/CustomizeProducts"
import ProductImages from "@/components/ProductImages/ProductImages"
import Image from "next/image"


const SinglePage = () => {
    return (
        <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
            {/* IMG */}
            <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
                <ProductImages />
            </div>
            {/* TEXTS */}
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
                <h1 className="text-4xl font-medium">Product Name</h1>
                <p className="text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, aliquid. Provident minima, id in sint perferendis amet nesciunt libero! Optio velit laborum qui corrupti quaerat fuga ea omnis expedita sequi?
                </p>
                <div className="h-[2px] bg-gray-100" />
                <div className="flex items-center gap-4">
                    <h3 className="text-xl text-gray-500 line-through">$59</h3>
                    <h2 className="font-medium text-2xl">$49</h2>
                </div>
                <div className="h-[2px] bg-gray-100" />
                <CustomizeProducts />
                <Add />
                <div className="h-[2px] bg-gray-100" />
                <div className="text-sm">
                    <h4 className="font-medium mb-4">Title</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim vel soluta recusandae quaerat excepturi omnis harum ad nisi minima? Voluptatem omnis eius eaque sunt officiis, odio pariatur voluptates magnam doloribus.
                    </p>
                </div>
                <div className="text-sm">
                    <h4 className="font-medium mb-4">Title</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim vel soluta recusandae quaerat excepturi omnis harum ad nisi minima? Voluptatem omnis eius eaque sunt officiis, odio pariatur voluptates magnam doloribus.
                    </p>
                </div>
                <div className="text-sm">
                    <h4 className="font-medium mb-4">Title</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim vel soluta recusandae quaerat excepturi omnis harum ad nisi minima? Voluptatem omnis eius eaque sunt officiis, odio pariatur voluptates magnam doloribus.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SinglePage