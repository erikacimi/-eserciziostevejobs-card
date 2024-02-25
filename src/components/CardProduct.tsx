import { AppContext } from "@/ContextProvider";
import {
  ContainerCard,
  ContainerTitleAndDescription,
  ContainerPriceQty,
  DivCart,
} from "@/styles/styledComponentCard";
import { useRouter } from "next/router";
import { useContext } from "react";

export function CardProduct({ product }: any) {
    const { removeFromCart, addToCart } = useContext(AppContext);
    const router = useRouter();

    return (
        <ContainerCard key={product.id}>
            <img src={product.thumbnail}></img>
            <ContainerTitleAndDescription>
                <h4>{product.title}</h4>
                <p>{product.description}</p>
            </ContainerTitleAndDescription>
            <ContainerPriceQty>
                <div>
                    <p>Price: {product.price}</p>
                </div>
                {router.pathname === "/" ? (
                <div>
                    <p>Qty: {product.qty}</p>
                </div>
                ) : router.pathname === "/cart" ? (
                <div>
                    <p>Qty: {product.quantity}</p>
                </div>
                ) : (
                <p>Error</p>
                )}
            </ContainerPriceQty>
            {router.pathname === "/" ? (
                <DivCart onClick={() => addToCart(product.id)}>
                    <p>ADD TO CART</p>
                </DivCart>
            ) : router.pathname === "/cart" ? (
                <DivCart onClick={() => removeFromCart(product.id)}>
                    <p>REMOVE</p>
                </DivCart>
            ) : (
                <p>Error</p>
            )}
        </ContainerCard>
    );
}
