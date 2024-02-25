import { AppContext } from "@/ContextProvider";
import { ButtonAndTextareaContainer, Button } from "@/styles/styledComponentButton";
import { useContext } from "react";

export function ButtonPay(){
    const {pay, done} = useContext(AppContext);

    return(
        <ButtonAndTextareaContainer>
        <Button onClick={() => {pay(); done()}}>
          PAY
        </Button>
      </ButtonAndTextareaContainer>
    )
}