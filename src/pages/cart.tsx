import { AppContext } from "@/ContextProvider";
import { ButtonPay } from "@/components/ButtonPay";
import { CardProduct } from "@/components/CardProduct";
import { Grid } from "@/styles/styledComponentCard";
import { useContext } from "react";
import styled from "styled-components";

const DivTotalPrice = styled.div({
  textAlign: 'center',
  fontSize: '1.5em'
})

export default function Cart() {
  const {cart, calculateTotalPrice} = useContext(AppContext);

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
      <DivTotalPrice>
        <p><b>Total Price:</b> {calculateTotalPrice()}</p>
      </DivTotalPrice>
      <ButtonPay />
    </>
  );
}
