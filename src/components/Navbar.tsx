import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

const ContainerNavbar = styled.div({
    display: 'flex',
    justifyContent: 'end',
    marginLeft: '50px',
    marginRight: '100px',
    marginBottom:'50px',
    '@media (max-width: 400px)': {
        flexDirection: 'column',
        alignItems: 'center',
    },
});

const StyledDivHome = styled.div<{ $isActive: boolean }>(({ $isActive }) => ({
    fontSize: ($isActive) ? '1.875em' :'1.2em',
    marginLeft: '20px',
    marginRight: '20px',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
}));

const StyledDivCart = styled.div<{ $isActive: boolean }>(({ $isActive }) => ({
    fontSize: ($isActive) ? '1.875em' :'1.2em',
    marginLeft: '20px',
    marginRight: '20px',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex'
}));

const StyledLink = styled(Link)({
  textDecoration: 'none',
  color: 'black'
});

export function Navbar(): JSX.Element {
  const router = useRouter();

  return (
    <ContainerNavbar>
        <StyledDivHome $isActive={router.pathname === "/"}>
            <StyledLink href="/">
                <h3>HOME</h3>
            </StyledLink>
        </StyledDivHome>
        <StyledDivCart $isActive={router.pathname === "/cart"}>
            <StyledLink href="/cart">
                <h3>CART</h3>
            </StyledLink>
        </StyledDivCart>
    </ContainerNavbar>
  );
}

export default Navbar;

