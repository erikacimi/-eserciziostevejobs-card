import styled from "styled-components";

export const Grid = styled.div({
  margin:'100px',
  marginTop: '100px',
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
  rowGap: '150px',
  columnGap: '150px',
  justifyContent: 'center',
  placeItems: 'center',
});
  
export const ContainerCard = styled.div({
  width: '300px',
  height: '500px',
  boxShadow: '10px 10px 15px 5px grey',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '15px'
})
  
export const ContainerPriceQty = styled.div({
  display: 'flex',
  justifyContent: 'space-around', // Aggiunto per distribuire gli elementi su tutto lo spazio disponibile
  width: '100%',
})
  
export const ContainerTitleAndDescription = styled.div({
  marginLeft : '10px',
  marginRight: '5px',
  textAlign: 'center',
  height: '200px',
})
  
export const DivCart = styled.div<{ disabled: boolean }>((props) => ({
  userSelect: 'none',
  color: props.disabled ? 'gray' : 'inherit',

  '&:hover': {
    color: props.disabled ? 'gray' : 'red',
    cursor: props.disabled ? 'not-allowed' : 'pointer',
  }
}))
