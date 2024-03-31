import Chair from "../assets/images/chair.png";
import { FaShoppingCart } from "react-icons/fa";
import ImageNotFound from "../assets/images/Image_not_available.png";

import { ToastContainer, toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToReduxCart, setReduxcart } from "../redux/slice/cartSlice";

function SingleProduct({ type, product, user }) {
  const reduxUser = useSelector((wholeReduxStore) => {
    return wholeReduxStore.user.value;
  });

  const dispatch = useDispatch() 

  function addToCart(e) {
    e.preventDefault();
    toast.dismiss();
    if (reduxUser) {
      if (reduxUser.role == "buyer") {
        /* add cart items in redux */
        dispatch(addToReduxCart({name: 'tesla'}))
      } else {
        toast.error("Forbidden ! only for buyer");
      }
    } else {
      toast.error("Login Required", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
    navigate("/");
  };

  return (
    <Link to={`/products/${product._id}`}>
      <div className="relative rounded bg-white border text-center shadow-md hover:bg-primary group hover:text-white hover:border-primary">
        <img
          src={product.image[0] || ImageNotFound}
          alt=""
          className={`w-full bg-white aspect-square ${
            type == "latest" ? "aspect-auto h-52 object-contain" : ""
          }`}
        />
        <div
          className={`py-2 px-4 ${
            type == "latest" ? "flex items-center justify-between" : ""
          }`}
        >
          <p className="my-2 text-lg text-secondary font-semibold group-hover:text-white">
            {product.name}
          </p>
          <p className="text-primary group-hover:text-white">
            ${product.price}
          </p>
        </div>
        <span
          onClick={addToCart}
          className="hidden absolute left-4 top-4 bg-primary-light p-4 border group-hover:inline-block rounded-full text-black"
        >
          <FaShoppingCart />
        </span>
      </div>
    </Link>
  );
}

export default SingleProduct;
