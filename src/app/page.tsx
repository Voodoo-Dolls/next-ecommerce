
import CategoryList from "@/components/CategoryList/CategoryList"
import ProductList from "@/components/ProductList/ProductList"
import Skeleton from "@/components/Skeleton/Skeleton"
import Slider from "@/components/Slider/Slider"
import { wixClientServer } from "@/lib/wixClientServer"
import { Suspense } from "react"


const HomePage = async () => {
  const wixClient = await wixClientServer()
  const res = await wixClient.products.queryProducts().find()

  console.log(res)
  return (

    <div>
      <Slider />
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">Featured Products</h1>
        <Suspense fallback={<Skeleton />}>
          <ProductList categoryId={process.env.FEATURED_PRODUCTS_CATEGORY_ID} limit={4} />
        </Suspense>
      </div>
      <div className="mt-24 ">
        <h1 className="text-2xl px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 mb-12">Categories</h1>
        <CategoryList />
      </div>

    </div>

  )
}

export default HomePage