import React from "react";
import polo from "../assets/polo.jpg";
import headphones from "../assets/headphones.png";
import handbag from "../assets/handbag.png";

const data = [
  { image: polo, product: "Polo Shirt", quantity: 20, status: "Sold" },
  { image: headphones, product: "Headset", quantity: 25, status: "Available" },
  { image: handbag, product: "Hand Bag", quantity: 30, status: "Available" },
];
export default function userProduct() {
  return (
    <div className="grid gap-[1rem] mt-[10rem] overflow-y-auto max-h-[80vh] justify-center py-[3rem] px-[1rem] font-inter">
      <div className="w-[45rem] rounded-[10px] py-[0.5rem] px-[1rem] bg-gradient-to-r from-[rgba(233,230,206,1)] to-[rgba(151,173,177,1)]">
        <h1 className="font-[600] text-[1.5rem]">My Products</h1>
      </div>
      <div className="grid w-[45rem] bg-white px-[2rem] py-[1rem] rounded-[10px]">
        <div className="flex gap-[4rem] text-[0.9rem] font-[600]">
          <h1>Products</h1>
          <h1 className="text-primaryOne">View All</h1>
        </div>
        <div className="flex gap-[1rem] mt-[1rem]">
          {data.map((data) => {
            const { image, product, status, quantity } = data;

            return (
              <div className="w-[13rem] flex bg-primaryTwo rounded-[10px] border-primaryOne border-[1px]">
                <div className="p-[0.2rem] rounded-[5px] w-[6rem] h-[8rem]">
                  <img
                    src={image}
                    alt=""
                    className="w-full h-full object-cover rounded-tl-[5px] rounded-bl-[5px]"
                  />
                </div>
                <div className="grid gap-[0.3rem] m-auto">
                  <h1>{product}</h1>
                  <h1 className="text-center font-[500] text-[#a7a7a7] text-[2.2rem]">
                    {quantity}
                  </h1>
                  <h1 className="text-center text-[0.9rem]">{status}</h1>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-[45rem] rounded-[10px] py-[0.5rem] px-[1rem] bg-gradient-to-r from-[rgba(233,230,206,1)] to-[rgba(151,173,177,1)]">
        <h1 className="font-[600] text-[1.5rem]">Add Products</h1>
      </div>
      <div className="flex justify-center gap-[2rem] w-[45rem] bg-white px-[2rem] py-[1rem] rounded-[10px]">
        <div>
          <div className="bg-primaryTwo w-[10rem] h-[10rem] rounded-[10px] mb-[1rem]">
            <h1 className="text-[0.9rem] text-center pt-[4rem] cursor-pointer text-[gray] hover:text-black">
              Add Product Image
            </h1>
          </div>
          <div className="grid gap-[0.5rem] text-[0.9rem]">
            <h1 className="">Change Background</h1>
            <div className="flex gap-[1rem]">
              <div className="w-[3rem] h-[3rem] bg-black rounded-[5px] cursor-pointer"></div>
              <div className="w-[3rem] h-[3rem] bg-[#7d972e] rounded-[5px] cursor-pointer"></div>
            </div>
          </div>
        </div>
        <form action="">
          <div className="mb-[0.7rem]">
            <input
              type="text"
              placeholder="Add Product Name"
              className="bg-primaryTwo w-[25rem] px-[0.5rem] py-[0.5rem] rounded-[5px] focus:outline-none"
            />
          </div>
          <div className="mb-[0.7rem]">
            <input
              type="text"
              placeholder="Product Category"
              className="bg-primaryTwo w-[25rem] px-[0.5rem] py-[0.5rem] rounded-[5px] focus:outline-none"
            />
          </div>
          <div className="mb-[0.2rem]">
            <textarea
              placeholder="Add Product Description"
              className="bg-primaryTwo w-[25rem] px-[0.5rem] py-[0.5rem] rounded-[5px] focus:outline-none"
              name=""
              id=""
              cols="30"
              rows="4"
            ></textarea>
          </div>
          <div className="mb-[0.7rem]">
            <input
              type="text"
              placeholder="Add Product Price"
              className="bg-primaryTwo w-[25rem] px-[0.5rem] py-[0.5rem] rounded-[5px] focus:outline-none"
            />
          </div>
          <button className="flex m-auto bg-primaryOne px-[3rem] py-[0.7rem] rounded-[5px] text-white">Save</button>

        </form>
      </div>
      <div className="w-[45rem] rounded-[10px] py-[0.5rem] px-[1rem] bg-gradient-to-r from-[rgba(233,230,206,1)] to-[rgba(151,173,177,1)]">
        <h1 className="font-[600] text-[1.5rem]">Delivery</h1>
      </div>
      <div className="flex justify-center gap-[2rem] w-[45rem] bg-white px-[2rem] py-[1rem] rounded-[10px]">
      <form action="">
          <div className="mb-[0.7rem]">
            <input
              type="text"
              placeholder="Name This Delivery"
              className="bg-primaryTwo w-[30rem] px-[0.5rem] py-[0.5rem] rounded-[5px] focus:outline-none"
            />
          </div>
          <div className="mb-[0.7rem]">
            <input
              type="text"
              placeholder="Region"
              className="bg-primaryTwo w-[30rem] px-[0.5rem] py-[0.5rem] rounded-[5px] focus:outline-none"
            />
          </div>
          <div className="mb-[0.7rem]">
            <label htmlFor="" className="text-[0.9rem] text-[#a7a7a7]">Days It Takes To Deliver</label>
            <div className="flex justify-between">
            <input
              type="text"
              placeholder="From"
              className="bg-primaryTwo w-[14rem] px-[0.5rem] py-[0.5rem] rounded-[5px] focus:outline-none"
            />
            <input
              type="text"
              placeholder="To"
              className="bg-primaryTwo w-[14rem] px-[0.5rem] py-[0.5rem] rounded-[5px] focus:outline-none"
            />
            </div>
          </div>
          <div className="mb-[0.7rem]">
            <input
              type="text"
              placeholder="Do You Charge For Delivery?"
              className="bg-primaryTwo w-[30rem] px-[0.5rem] py-[0.5rem] rounded-[5px] focus:outline-none"
            />
          </div>
          <div className="mb-[0.7rem]">
            <input
              type="text"
              placeholder="Add Delivery Price"
              className="bg-primaryTwo w-[30rem] px-[0.5rem] py-[0.5rem] rounded-[5px] focus:outline-none"
            />
          </div>
          <button className="flex m-auto bg-primaryOne px-[3rem] py-[0.7rem] rounded-[5px] text-white">Submit</button>
        </form>
      </div>

    </div>
  );
}
