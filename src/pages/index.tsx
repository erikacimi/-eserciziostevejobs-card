import Head from "next/head";
import { Inter } from "next/font/google";
import { AppContext } from "@/ContextProvider";
import { useContext } from "react";
import { Grid } from "@/styles/styledComponentCard";
import { CardProduct } from "@/components/CardProduct";

const inter = Inter({ subsets: ["latin"] });

export default function Home(): JSX.Element {

  const {products} = useContext(AppContext);
  
  return (
    <>
      <Grid>
        {products ? (
          products.map((product) => (
            <CardProduct key={product.id} product={product} />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </Grid>
    </>
  );
  
}
