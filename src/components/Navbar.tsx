import { ContainerNavbar, StyledDivHome, StyledLink, StyledDivCart } from "@/styles/styledComponentNavbar";
import { useRouter } from "next/router";

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

