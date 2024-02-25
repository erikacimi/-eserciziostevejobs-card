import { ReactNode, createContext, useEffect, useState } from "react";
import { Cart, Product, TContext } from "./declarations";

export const AppContext = createContext<TContext>({
  cart: [],
  paid: false,
  products: null,
  addToCart: () => {},
  removeFromCart: () => {},
  pay: () => {},
  done: () => {},
  getProductQuantity: () => 0,
  loading: false,
  error: "",
});

interface Props {
  children: ReactNode;
}

export function ContextProvider({ children }: Props) {
  const [cart, setCart] = useState<TContext["cart"]>([]);
  const [paid, setPaid] = useState<TContext["paid"]>(false);
  const [products, setProducts] = useState<TContext["products"]>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const addToCart = (idProduct: Product["id"]) => {
    const found = cart.find((el) => el.id === idProduct);
    const foundProduct = products?.find((el) => el.id === idProduct);
    if(!!foundProduct && foundProduct.qty > (found?.quantity ?? 0)){
      if (!!found) {
        const newCart = cart.map((el) => {
          if (el.id !== idProduct) return el;
          return { id: el.id, quantity: el.quantity + 1,  thumbnail: el.thumbnail, title: el.title, description: el.description, price: el.price};
        });
        setCart(newCart);
      } else {
        const foundProduct = products!.find((product) => product.id === idProduct);
        if (foundProduct) {
          setCart([...cart, { ...foundProduct, quantity: 1 }]);
        }
      }
  }else{
    console.log("Non abbiamo la disponibilità per questa quantità di prodotto o il prodotto non è più disponibile");
  }
  };
  
  const removeFromCart = (idProduct: Product["id"]) => {
    const newCart = cart.reduce((acc, el) => {
      if (el.id === idProduct) {
        if (el.quantity > 1) {
          acc.push({ id: el.id, quantity: el.quantity - 1, thumbnail: el.thumbnail, title: el.title, description: el.description, price: el.price });
          return acc;
        }
        return acc;
      } else {
        acc.push(el);
        return acc;
      }
    }, [] as Cart);
    setCart(newCart);
  };

  const pay = () => {
    setPaid(true);
    setCart([]);
  };

  const getProducts = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://mockend.up.railway.app/api/products"
      );
      const data = await response.json();
      setProducts(data);
      setLoading(false);
    } catch (error: any) {
      setError(error.message);
      setLoading(false);
    }
  };

  const done = () => {
    setPaid(false);
  };

  const getProductQuantity = (idProduct: Product["id"]) => {
    return 0;
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <AppContext.Provider
      value={{
        cart,
        paid,
        products,
        addToCart,
        removeFromCart,
        getProductQuantity,
        pay,
        loading,
        error,
        done,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
