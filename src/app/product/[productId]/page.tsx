import Container from "@/components/Container"
import ProductDetails from "@/app/product/[productId]/ProductDetails"
import { product } from "../../../../utils/product"

interface IParams {
    productId?: string
}

export default function Product({ params }: { params: IParams }) {
    return (
        <div className="p-8">
            <Container>
                <ProductDetails product={product} />
            </Container>
        </div>
    )
}