import React, {useContext} from "react";
import {Link} from "react-router-dom";
import {FaCartPlus} from "react-icons/fa";
import {CartContext} from "../contexts/CartContext";

const Products = ({product}) => {
    const {id, image, title, price} = product;
    const {addtoCart} = useContext(CartContext);

    return (
        <div>
            <div key={id}>
                <div
                    className="border-2 border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition ">
                    <div className="w-full h-full flex justify-center items-center">
                        <Link to={`/product/${id}`} className="w-[200px] mx-auto flex justify-center items-center">
                            <img
                                className="max-h-[160px] group-hover:scale-110 transition duration-300"
                                src={image}
                                alt=""/>
                        </Link>
                    </div>
                </div>
                <button
                    className="bg-green-500 flex gap-2 items-center justify-center w-full p-2 rounded-lg"
                    onClick={() => addtoCart(product, id)}>
                      <h1>ADD TO CART</h1>
                    <FaCartPlus/>
                </button>
                <div>
                    <Link to={`/product/${id}`} className="line-clamp-1">
                        <strong>{title}</strong>
                    </Link>
                    <h1 className="text-xl">₦ {price}</h1>
                </div>
            </div>
        </div>
    );
};

export default Products;
