import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { IoCloseCircle } from "react-icons/io5";
import { CartContext } from "../contexts/CartContext";
import { ProductContext } from "../contexts/ProductContext";
import { SearchContext } from "../contexts/SearchContext";

const Header = () => {
  const { totalItems } = useContext(CartContext);
  const { products } = useContext(ProductContext);
  const {
    search,
    togglesearch,
    setTogglesearch,
    handleShowSearch,
    handleChange,
  } = useContext(SearchContext);

  // States for handling small screen navigation
  const [smallscreen, setSmallscreen] = useState(false);

  const [result, setResult] = useState([]);

  // Handle small screen navigation toggle
  const handleShowSmall = () => {
    setSmallscreen((prevsmallscreen) => !prevsmallscreen);
  };

  // Search Products function (updates `result` state)
  const SearchProducts = () => {
    const filteredProducts = products.filter((product) => {
      const searchTerm = search.toLowerCase();
      const title = product.title.toLowerCase();
      const category = product.category.toLowerCase();
      return title.includes(searchTerm) || category.includes(searchTerm);
    });
    setResult(filteredProducts); // Update the empty result array
  };

  // useEffect to updates search whenever `search and products` changes
  useEffect(() => {
    if (search) {
      return SearchProducts();
    } else {
      return setResult([]);
    }
  }, [search, products]);

  return (
    <div className="flex items-center justify-around p-2 shadow-xl">
      <Link to={"/"}>
        <strong className="text-[20px] md:text-[20px] lg:text-[30px] xl:text-[30px]">
          PrimeCircuit
        </strong>
      </Link>
      <div className="lg:flex xl:flex md:hidden sm:hidden gap-4">
        <Link to="/">Home</Link>
        <Link to="/Shop">Shop</Link>
        <Link to="/About">About</Link>
        <Link to="/Contacts">Contact</Link>
      </div>
      <div className="flex gap-3">
        <div className="flex items-center">
          <button className="text-xl" onClick={handleShowSearch}>
            <CiSearch />
          </button>
          {togglesearch && (
            <div className="fixed z-50 max-w-[400px] p-2 overflow-y-scroll inset-0 bg-white">
              <div className="flex flex-col gap-3 mt-3 mb-3 justify-center items-center">
                <div className="flex gap-2">
                  <input
                    onChange={handleChange}
                    className="p-2 border-2 text-[18px] border-black rounded-xl"
                    type="text"
                    placeholder="Search..."
                    value={search}
                  />
                  <button
                    className="text-xl text-red-500"
                    onClick={() => setTogglesearch(false)}
                  >
                    <IoCloseCircle />
                  </button>
                </div>
                <div className="search-results">
                  {result.length > 0 ? (
                    result.map((product) => (
                      <div
                        key={product.id}
                        className="border-black mb-2 border-2 p-2 rounded-xl justify-center grid grid-cols-1"
                      >
                        <Link
                          onClick={() => setTogglesearch(false)}
                          className="flex gap-2 items-center"
                          to={`/product/${product.id}`}
                        >
                          <img
                            className="w-[50px]"
                            src={product.image}
                            alt=""
                          />
                          <h1>{product.title}</h1>
                        </Link>
                      </div>
                    ))
                  ) : (
                    <div>No results found</div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="relative flex justify-center items-center">
          <Link className="text-md" to={"/Cart"}>
            <FaShoppingCart />
          </Link>
          <span className="absolute top-2/3 left-1/2 bg-green-500 text-black rounded-full w-5 h-5 text-center justify-center text-sm">
            {totalItems}
          </span>
        </div>
        <Link
          className="text-base bg-green-400 text-black font-semibold p-1 rounded-md"
          to="/SignUp"
        >
          <CgProfile />
        </Link>
        <div className="flex lg:hidden relative">
          {!smallscreen ? (
            <GiHamburgerMenu size={25} onClick={handleShowSmall} />
          ) : (
            <MdClose size={25} onClick={handleShowSmall} />
          )}
          {smallscreen && (
            <div className="absolute top-8 right-0 rounded-lg mt-2 w-48 bg-white shadow-md p-4 flex flex-col items-start gap-4 transform transition-transform duration-300 ease-in-ou">
              <div className="w-full text-xl flex flex-col">
                <Link
                  onClick={() => setSmallscreen(false)}
                  className="border-b-2 p-2 border-black text-center"
                  to="/"
                >
                  Home
                </Link>
                <Link
                  onClick={() => setSmallscreen(false)}
                  className="border-b-2 p-2 border-black text-center"
                  to="/Shop"
                >
                  Shop
                </Link>
                <Link
                  onClick={() => setSmallscreen(false)}
                  className="border-b-2 p-2 border-black text-center"
                  to="/About"
                >
                  About
                </Link>
                <Link
                  onClick={() => setSmallscreen(false)}
                  className="border-b-2 p-2 border-black text-center"
                  to="/Contacts"
                >
                  Contact
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
