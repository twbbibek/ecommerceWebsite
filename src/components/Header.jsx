import { CiMail } from "react-icons/ci";
import { TbPhoneCall } from "react-icons/tb";
import {
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutReduxUser, setReduxUser } from "../redux/slice/userSlice";
import ProtectedComponent from "./ProtectedComponent";

function Header({ user }) {
  const { pathname } = useLocation();
  const reduxUser = useSelector((reduxStore) => {
    return reduxStore.user.value;
  });
  const cartItems = useSelector((reduxStore) => {
    return reduxStore.cart.cartItems;
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutReduxUser());
    navigate("/login");
  };

  let totalCartItems = 0;
  cartItems.forEach(item => {
    totalCartItems += item.quantity
  })

  return (
    <>
      <header className="bg-primary text-white">
        <nav className="container py-3 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center gap-2">
            <CiMail className="inline" /> <span>email@email.com</span>
            <TbPhoneCall className="inline" /> <span>+977 9876543210</span>
          </div>
          <div className="flex items-center gap-2">
            {reduxUser?.name && <span>user: {reduxUser.name}</span>}
            &nbsp;
            {reduxUser ? (
              <button onClick={handleLogout}>logout</button>
            ) : (
              <Link to="/login">Login</Link>
            )}
            <AiOutlineUser className="inline" />
            <ProtectedComponent role={"buyer"}>
              <AiOutlineShoppingCart className="inline ml-2" />
            </ProtectedComponent>
          </div>
        </nav>
      </header>

      <header className="bg-white">
        <nav className="container py-5 flex flex-col items-center gap-4 md:flex-row lg:gap-8 2xl:gap-16">
          <Link to="/" className="text-4xl font-bold text-primary-dark">
            Hekto
          </Link>

          <div className="flex flex-col gap-4 items-center grow justify-between md:flex-row">
            <ul className="flex gap-9">
              <li>
                <Link
                  to="/"
                  className={`${
                    pathname == "/" ? "text-secondary" : ""
                  } hover:text-secondary `}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className={`${
                    pathname == "/products" ? "text-secondary" : ""
                  } hover:text-secondary `}
                >
                  Products
                </Link>
              </li>

              <ProtectedComponent role="seller">
                <li>
                  <Link
                    to="/products/create"
                    className={`${
                      pathname == "/products/create" ? "text-secondary" : ""
                    } hover:text-secondary `}
                  >
                    Create Products
                  </Link>
                </li>
              </ProtectedComponent>
                                    
              <ProtectedComponent role="buyer">
                <li>
                  <Link
                    to="/carts"
                    className={`${
                      pathname == "/carts" ? "text-secondary" : ""
                    } hover:text-secondary flex items-center `}
                  >
                    <span>Cart</span>
                    <AiOutlineShoppingCart className="inline" />(
                    {totalCartItems})
                  </Link>
                </li>
              </ProtectedComponent>
            </ul>

            <form
              className="flex"
              onSubmit={(e) => {
                e.preventDefault();
                navigate("/products?search_term=" + e.target.search_term.value);
              }}
            >
              <input
                type="search"
                name="search_term"
                className="border-2 border-r-0 px-2 focus:border-secondary focus:outline-none"
              />
              <button className="bg-secondary text-white p-3">
                <AiOutlineSearch />
              </button>
            </form>
          </div>
        </nav>
      </header>
    </>
  );
}
export default Header;
