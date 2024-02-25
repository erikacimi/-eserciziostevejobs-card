import { AppContext } from "@/ContextProvider";
import { CardProduct } from "@/components/CardProduct";
import { Grid } from "@/styles/styledComponentCard";
import { useContext } from "react";

export default function Cart() {

  const {cart} = useContext(AppContext);

  return (
    <>
      <Grid>
        {cart ? (
          cart.map((product) => (
            <CardProduct key={product.id} product={product} />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </Grid>
    </>
  );
}
