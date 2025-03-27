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

const AppProviders = ({ children }) => {
  return (
    <UserContextProvider>
      <AuthContextProvider>
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
      </AuthContextProvider>
    </UserContextProvider>
  );
};

export default AppProviders;
