import styled from "styled-components";

export const ButtonAndTextareaContainer = styled.div({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '50px',
    marginTop: '25px',
    flexDirection: 'column',
});
  
export const Button = styled.button({
    padding: '4px 20px',
    textAlign: 'center',
    fontSize: '16px',
    transitionDuration: '0.4s',
    cursor: 'pointer',
    backgroundColor: 'white',
    color: 'black',
    border: '2px solid black',
  
    '&:hover': {
        backgroundColor: 'black',
        color: 'white',
    }
});
  