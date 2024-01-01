'use client'

import { Rating } from "@mui/material"

interface ProductDetailsProps {
    product: any
}

const Horizontal = () => {

}

export default function ProductDetails ({ product } : ProductDetailsProps) {

    // const productRating = product.reviews.reduce(
    //     (acc: number, item: any) => item.rating + acc, 0) / product.reviews.length

    return (
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-12 ">

            <div>Image</div>

            <div className="flex flex-col gap-1 text-slate-500 text-sm">
                <h2 className=" text-3xl font-medium text-slate-700 ">details</h2>
                <div className="flex items-center gap-2">
                    {/* <Rating value={productRating} readOnly /> */}
                    rating
                    <div> reviews</div>
                </div>
                
                <div className="text-justify">description</div>

            </div>
        </div>
    )
}
    
    