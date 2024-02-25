import styled from "styled-components";

const DivSuccess = styled.div({
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  width: '100%',
})

export default function Success() {
  return (
    <>
      <DivSuccess>
        <h1>Success</h1>
        <p>Payment made successfully!</p>
      </DivSuccess>
    </>
  );
}
