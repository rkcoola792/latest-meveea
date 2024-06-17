import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { updateCart, removeItem } from "../../store/cartSlice";
import { useDispatch } from "react-redux";

const CartItems = ({ item }) => {
  const dispatch = useDispatch();
  const updateCartItems = (e, key) => {
    let payload = {
      key,
      val: (key = "quantity" ? parseInt(e.target.value) : e.target.value),
      id: item.id,
    };
    dispatch(updateCart(payload));
  };
  return (
    <div className="flex py-5 gap-3 md:gap-5 border-b">
      <div className="shrink-0 aspect-sqaure  w-[50px] md:w-[120px]">
        <img
          src={item.attributes.thumbnail.data[0].attributes.url}
          alt=""
          className="h-[100px] w-[120px] object-cover"
        />
      </div>

      <div className="product-details w-full flex flex-col">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="product-title text-lg md:text-2xl  font-semibold text-black/[0.8]">
            <p>{item.attributes.name}</p>
          </div>
          <div className="product-subtitle text-sm md:text-md  font-medium text-black/[0.5] block md:hidden">
            <p>{item.attributes.subtitle}</p>
          </div>
          <div className="product-price text-sm md:text-md  font-medium text-black/[0.5] mt-2">
            <p>MRP : $ {item.attributes.price}</p>
          </div>
        </div>
        <div className="product-subtitle text-sm md:text-md  font-medium text-black/[0.5] ">
          <p>Men's T-shirt</p>
        </div>

        <div className="flex items-center justify-between mt-1">
          <div className="flex items-center gap-2 md:gap-10 text-black/[0.5] text-sm md:text-md">
            <div className="flex items-center gap-1">
              <div className="font-semibold">Size:</div>
              <select
                className="hover:text-black cursor-pointer"
                onChange={(e) => updateCartItems(e, "selectSize")}
              >
                {item?.attributes?.size?.data?.map((ele, index) => (
                  <option
                    selected={item.selectSize == ele.size}
                    disabled={!ele.enabled ? true : false}
                    key={index}
                    value={ele.size}
                  >
                    {ele.size}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex items-center gap-1">
              <div className="font-semibold">Quantity:</div>
              <select
                className="hover:text-black cursor-pointer"
                onChange={(e) => updateCartItems(e, "quantity")}
              >
                {Array.from({ length: 10 }, (_, i) => i + 1).map(
                  (ele, index) => (
                    <option
                      key={index}
                      value={ele}
                      selected={item.selectSize == ele.size}
                    >
                      {ele}
                    </option>
                  )
                )}
              </select>
            </div>
          </div>
          <RiDeleteBinLine
            className="delete-icon cursor-pointer text-black/[0.5] hover:text-black text-[16px] md:text-[20px]"
            onClick={() => dispatch(removeItem({ id: item.id }))}
          />
        </div>
      </div>
    </div>
  );
};

export default CartItems;
