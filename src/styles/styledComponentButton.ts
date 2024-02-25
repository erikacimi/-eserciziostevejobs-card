import Link from "next/link";
import styled from "styled-components";

export const ButtonAndTextareaContainer = styled.div({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '50px',
    marginTop: '25px',
    flexDirection: 'column',
    width: 'fitContent',
});
  
export const Button = styled.button<{ disabled: boolean }>((props) => ({
    padding: '4px 20px',
    textAlign: 'center',
    fontSize: '16px',
    transitionDuration: '0.4s',
    cursor: 'pointer',
    backgroundColor: 'white',
    color: props.disabled ? 'grey' : 'black',
    border: props.disabled ? '2px solid grey' : '2px solid black',
    pointerEvents: 'auto',
  
    '&:hover': {
        ...(props.disabled ? {
            cursor: 'not-allowed',
        } : {
            backgroundColor: 'black',
            color: 'white',
        })
    }
}));
  
export const StyledLinkButton = styled(Link)({
    textDecoration: 'none',
    color: 'black',
    pointerEvents: 'none'
  });