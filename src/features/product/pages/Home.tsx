import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hook";
import { getProducts } from "../../../actions/product";
import { Link } from "react-router-dom";
import { useGetAllProductsQuery } from "../../../api/product";

type Props = {};

const Home = (props: Props) => {
  const dispatch = useAppDispatch();

  const { data: products } = useGetAllProductsQuery();

  return (
    <div className="container mx-auto px-6 mb-10">
      <div className="mt-16">
        <h3 className="text-gray-600 text-2xl font-medium">Nước Hoa</h3>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
          {products?.map((product, index) => (
            <div
              className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden"
              key={index}
            >
              <div
                className="flex items-end justify-end h-56 w-full bg-cover"
                style={{
                  backgroundImage: `url(${product.images?.[0]})`,
                }}
              >
                <Link to={`/product/${product.id}`}>
                  <button className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                  </button>
                </Link>
              </div>
              <div className="px-5 py-3">
                <Link to={`/product/${product.id}`}>
                  <h3 className="text-gray-700 uppercase">{product?.name}</h3>
                </Link>
                <span className="text-gray-500 mt-2">{product?.price} VNĐ</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
