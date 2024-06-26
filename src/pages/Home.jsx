import { useEffect, useState } from "react";
import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import SingleProduct from "../components/SingleProduct";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function CarouselItem(props) {
  return (
    <div
      className={`${props.banner} bg-banner-1 h-[50vh] lg:h-[80vh] bg-center bg-cover text-left flex justify-start`}
    >
      <div className="container">
        <div className="w-2/3 mt-32">
          <p className="text-secondary mb-3">
            Best Furniture For Your Castle....
          </p>
          <p className="text-5xl mb-3 font-bold">
            New Furniture Collection Trends in 2020
          </p>
          <p className="text-primary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
            velit quia animi reiciendis vel fuga?
          </p>
          <Link
            to="/products"
            className="mt-7 bg-secondary text-white px-4 py-2 inline-block"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
}

function Home({user}) {
  const [products, setProducts] = useState([]);
  const [latestProducts, setLatestProducts] = useState([]);
  //let products = [];

  useEffect(() => {
    axios
      .get("https://ecommerce-sagartmg2.vercel.app/api/products/trending")
      .then((res) => {
        //console.log(res);
        //products = res.data.data;
        setProducts(res.data.data);
      });
    axios
      .get("https://ecommerce-sagartmg2.vercel.app/api/products")
      .then((res) => {
        //console.log(res);
        //products = res.data.data;
        setLatestProducts(res.data.data[0].data);
      });
  }, []);
  return (
    <>
      <Carousel showThumbs={false} swipeable={true} emulateTouch={true}>
        <CarouselItem banner="bg-banner-1" />
        <CarouselItem banner="bg-banner-2" />
        <CarouselItem banner="bg-banner-3" />
      </Carousel>

      <div className="container">
        <section className="my-28 grid grid-cols-4 gap-4">
          {products.length == 0 && (
            <>
              <Skeleton height={150} />
              <Skeleton height={150} />
              <Skeleton height={150} />
              <Skeleton height={150} />
            </>
          )}
          {products.map((product) => {
            return <SingleProduct user={user} product={product} />;
          })}
        </section>

        <p className="text-5xl font-bold text-primary-dark text-center mb-11">
          Latest Products
        </p>

        <section className="grid grid-cols-3 gap-4">
          {latestProducts.length == 0 && (
            <>
              <Skeleton height={150} />
              <Skeleton height={150} />
              <Skeleton height={150} />
              <Skeleton height={150} />
              <Skeleton height={150} />
              <Skeleton height={150} />
            </>
          )}
          {latestProducts.slice(0, 6).map((product, index) => {
            if (index > 5) {
              return null;
            }
            return <SingleProduct type="latest" product={product} />;
          })}
        </section>
      </div>
    </>
  );
}
export default Home;
