import Menu from "../../assets/menu-alt-04-svgrepo-com.svg";
import Cart from "../../assets/cart-large-minimalistic-svgrepo-com.svg";
import User from "../../assets/user-alt-1-svgrepo-com.svg";

const Header = () => {
  return (
    <div className="w-full h-16 border-b flex items-center justify-between px-2">
      <div className="flex justify-between items-center w-full">
        <div className="flex items-center gap-3">
          <img src={Menu} alt="Menu" className="w-8 h-8" />
          <h2 className="">Nome Da Loja</h2>
        </div>
        <div className="flex items-center gap-4">
          <img src={Cart} alt="Carrinho de compra" className="w-6 h-6" />
          <img src={User} alt="Carrinho de compra" className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
};

export default Header;
