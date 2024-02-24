import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { AppContext } from "@/ContextProvider";
import { useContext } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home(): JSX.Element {

  const {products} = useContext(AppContext);
  
  return (
    <>
      <h1>Home</h1>
      <div>
        {products ? (
          products.map((product) => (
            <div key={product.id}>
              <img src={product.thumbnail}></img>
              <h4>{product.title}</h4>
              <p>{product.description}</p>
              <p>Price: {product.price}</p>
              <p>Qty: {product.qty}</p>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
  
}
