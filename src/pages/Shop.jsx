import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import Products from "../components/Products";
import { SearchContext } from "../contexts/SearchContext";
import { RiProgress3Line } from "react-icons/ri";
const Shop = () => {
  const { products, isLoading, error } = useContext(ProductContext);
  // Male Category
  const Men = products.filter((menproduct) => {
    return menproduct.category === "men's clothing";
  });

  // Female Category
  const Women = products.filter((womenproduct) => {
    return womenproduct.category === "women's clothing";
  });

  // Electronics
  const Electronics = products.filter((electronicsproduct) => {
    return electronicsproduct.category === "electronics";
  });

  // Jewelery
  const Jewelery = products.filter((jeweleryproduct) => {
    return jeweleryproduct.category === "jewelery";
  });

  if (error) {
    return (
      <div className="flex flex-col text-red-600 text-2xl items-center justify-center min-h-screen">
        <div>{error.message}</div>
        <h1 className="text-center">CHECK YOUR INTERNET CONNECTION</h1>
      </div>
    );
  }

  const { setTogglesearch } = useContext(SearchContext);

  return (
    <section onClick={() => setTogglesearch(false)}>
      {isLoading ? (
        <div className="flex items-center justify-center min-h-screen">
          <button
            className="bg-black text-white text-[40px] font-semibold py-2 px-4 rounded flex items-center"
            disabled
          >
            <RiProgress3Line className="animate-spin h-5 mr-3" />
          </button>
        </div>
      ) : (
        <>
          <div className="grid p-10 justify-center">
            <strong className="text-4xl bg-black text-white rounded-md p-1 mt-4 mb-4 text-center">
              MEN'S CATEGORY
            </strong>
            <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
              {Men.map((product) => {
                return <Products product={product} key={product.id} />;
              })}
            </div>
          </div>
          <div className="grid p-10 justify-center">
            <strong className="text-4xl bg-black text-white rounded-md p-1 mt-4 mb-4 text-center">
              WOMEN'S CATEGORY
            </strong>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
              {Women.map((product) => {
                return <Products product={product} key={product.id} />;
              })}
            </div>
          </div>
          <div className="grid p-10 justify-center">
            <strong className="text-4xl  bg-black text-white rounded-md p-1 mt-4 mb-4 text-center">
              ELECTRONICS
            </strong>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
              {Electronics.map((product) => {
                return <Products product={product} key={product.id} />;
              })}
            </div>
          </div>
          <div className="grid p-10 justify-center">
            <strong className="text-4xl bg-black text-white rounded-md p-1 mt-4 mb-4 text-center">
              JEWELERIES
            </strong>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2">
              {Jewelery.map((product) => {
                return <Products product={product} key={product.id} />;
              })}
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Shop;
