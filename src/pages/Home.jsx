import React, { useContext } from "react";
import Products from "../components/Products";
// import product context
import { ProductContext } from "../contexts/ProductContext";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import { SearchContext } from "../contexts/SearchContext";
import { RiProgress3Line } from "react-icons/ri";

const Home = () => {
  const { setTogglesearch } = useContext(SearchContext);
  // get products from productscontext
  const { products, isLoading, error } = useContext(ProductContext);

  // FilteredProducts
  const NewArrivals = products.filter((item) => {
    return (
      item.category === "men's clothing" || item.category === "women's clothing"
    );
  });

  if (error) {
    return (
      <div className="flex flex-col text-red-600 text-2xl items-center justify-center min-h-screen">
        <div>{error.message}</div>
        <h1 className="text-center">CHECK YOUR INTERNET CONNECTION</h1>
      </div>
    );
  }

  return (
    <div onClick={() => setTogglesearch(false)}>
      {isLoading ? (
        <div className="flex items-center justify-center min-h-screen">
          <button
            className="bg-black text-white font-semibold py-2 px-4 rounded flex items-center"
            disabled
          >
            <RiProgress3Line className="text-[40px] animate-spin h-5 mr-3" />
          </button>
        </div>
      ) : (
        <>
          <Hero />
          <section className="p-16">
            <div className="container grid justify-center mx-auto">
              <div className=" grid grid-flow-row items-center justify-center text-3xl mt-4 mb-4">
                <strong className="text-center mb-4 mt-4">NEW ARRIVALS</strong>
                <Link
                  className="bg-black text-white text-lg text-center rounded-md p-2"
                  to="/Shop"
                >
                  Shop Now
                </Link>
              </div>
              <div className="grid justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
                {NewArrivals.map((product) => {
                  return <Products product={product} key={product.id} />;
                })}
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default Home;
