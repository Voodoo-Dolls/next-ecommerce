'use client'
import Image from "next/image"
import { useState } from "react"

const images = [
    {
        id: 1,
        url: "https://images.pexels.com/photos/30415600/pexels-photo-30415600/free-photo-of-bold-fashion-portrait-with-blue-and-orange-contrast.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    },
    {
        id: 2,
        url: "https://images.pexels.com/photos/30336869/pexels-photo-30336869/free-photo-of-moody-floral-close-up-with-dark-background.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    },
    {
        id: 3,
        url: "https://images.pexels.com/photos/30237034/pexels-photo-30237034/free-photo-of-chateau-de-le-lude-in-golden-hour.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    },
    {
        id: 4,
        url: "https://images.pexels.com/photos/29626890/pexels-photo-29626890/free-photo-of-elegant-woman-reflecting-in-decorative-mirror.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    }
]

const ProductImages = () => {
    const [index, setIndex] = useState(0)
    return (
        <div>
            <div className="h-[500px] relative">
                <Image
                    src={images[index].url}
                    fill
                    sizes="50vw"
                    alt=""
                    className="object-cover rounded-md"
                />
            </div>
            <div className="flex justify-between gap-4 mt-8">
                {images.map((image, index) => (
                    <div className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer" key={image.id} onClick={() => setIndex(index)}>
                        <Image
                            src={image.url}
                            fill
                            sizes="30vw"
                            alt=""
                            className="object-cover rounded-md"
                        />
                    </div>
                ))}


            </div>
        </div>
    )
}
export default ProductImages