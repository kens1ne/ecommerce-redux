import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../app/hook";
import { getProductById } from "../../../../actions/product";
import { useGetOneProductQuery } from "../../../../api/product";

type Props = {};

const ProductDetailPage = (props: Props) => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const { data: product } = useGetOneProductQuery(Number(id));

  const addToCart = (product: any) => {
    console.log("123");
  };
  return (
    <div>
      <section className="text-gray-700 body-font overflow-hidden bg-white">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
              src={product?.images?.[0]}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                BRAND NAME
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {product?.name}
              </h1>
              <p className="leading-relaxed">{product?.description}</p>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                  {product?.price} VNĐ
                </span>
                <button
                  className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded"
                  onClick={() => addToCart(product)}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetailPage;
