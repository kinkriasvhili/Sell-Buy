// src/Context/AppProviders.jsx
import { AuthContextProvider } from "./AuthContext";
import { UserContextProvider } from "./UserContext";
import { ProductContextProvider } from "./ProductContext";
import { CartContextProvider } from "./CartContext";
import { OrderContextProvider } from "./OrderContext";
import { FavoriteContextProvider } from "./FavoriteContext";
import { ReviewContextProvider } from "./ReviewContext";
import { DiscountContextProvider } from "./DiscountContext";
import { ChatContextProvider } from "./ChatContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const AppProviders = ({ children }) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <UserContextProvider>
          <ProductContextProvider>
            <CartContextProvider>
              <OrderContextProvider>
                <FavoriteContextProvider>
                  <ReviewContextProvider>
                    <DiscountContextProvider>
                      <ChatContextProvider>{children}</ChatContextProvider>
                    </DiscountContextProvider>
                  </ReviewContextProvider>
                </FavoriteContextProvider>
              </OrderContextProvider>
            </CartContextProvider>
          </ProductContextProvider>
        </UserContextProvider>
      </AuthContextProvider>
    </QueryClientProvider>
  );
};

export default AppProviders;
