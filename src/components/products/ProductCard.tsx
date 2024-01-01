'use client'

import Image from "next/image"
import TruncateText from "../../../utils/TruncateText"
import formatPrice from "../../../utils/formatPrice"
import { Rating } from "@mui/material"
import { useRouter } from "next/navigation"

interface ProductCardProps {
    data: any
}

export default function ProductCard({ data }: ProductCardProps) {

    const router = useRouter();
    
    const productRating = data.reviews.reduce(
        (acc: number, item: any) => item.rating + acc, 0) / data.reviews.length

    return (
        <div onClick={ () => router.push(`/product/${data.id}`) }
            className="col-span-1 cursor-pointer border-[1.2px] border-slate-200 bg-slate-50 rounded-sm p-2 transition hover:scale-105 text-center text-sm ">
            <div className=" flex flex-col items-center w-full gap-1 ">
                {/* Image */}
                <div className="aspect-square overflow-hidden w-full ">
                    <Image
                        src={ data.images[0].image }
                        alt={TruncateText(data.name)}
                        className=" w-full h-full object-contain"
                        width="200"
                        height="200"
                    />
                </div>
                
                {/* Name */}
                <div>{ TruncateText(data.name) }</div>

                {/* Rating */}
                <div>
                    <Rating value={productRating} readOnly/>
                </div>

                {/* Review */}
                <div>{ data.reviews.length }</div>

                <div className="font-semibold">{ formatPrice(data.price) }</div>
            </div>
        </div>
    )
}