import {CartContextProvider} from "./Store/CartContext";
import { UserProgressContextProvider } from "./Store/UserProgressContext";
import Header from "./components/Header";
import Meals from "./components/Meals";


function App() {
  return (
    <CartContextProvider>
      <UserProgressContextProvider>
      <Header/>
      <Meals/>
      </UserProgressContextProvider>
    </CartContextProvider>
  );
}

export default App;
