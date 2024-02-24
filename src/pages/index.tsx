import Head from "next/head";
import { Inter } from "next/font/google";
import { AppContext } from "@/ContextProvider";
import { useContext } from "react";
import { ContainerCard, ContainerPriceQty, ContainerTitleAndDescription, DivCart, Grid } from "@/styles/styledComponent";
import Link from "next/link";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home(): JSX.Element {

  const {products, addToCart} = useContext(AppContext);
  
  return (
    <>
      <Grid>
        {products ? (
          products.map((product) => (
            <ContainerCard key={product.id} >
              <img src={product.thumbnail}></img>
              <ContainerTitleAndDescription>
                <h4>{product.title}</h4>
                <p>{product.description}</p>
              </ContainerTitleAndDescription>
              <ContainerPriceQty>
                <div>
                  <p>Price: {product.price}</p>
                </div>
                <div>
                  <p>Qty: {product.qty}</p>
                </div>
              </ContainerPriceQty>
              <DivCart onClick={() => addToCart(product.id)}>
                <p>ADD TO CART</p>
              </DivCart>
            </ContainerCard>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </Grid>
    </>
  );
  
}
