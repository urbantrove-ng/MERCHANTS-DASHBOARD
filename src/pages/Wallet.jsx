import React from "react";
import { FaWallet } from "react-icons/fa";

const data = [
  {text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
  {text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
  {text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
  {text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
  {text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
  {text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
]
export default function Wallet() {
  return (
    <div className="grid gap-[1rem] mt-[10rem] overflow-y-auto max-h-[80vh] justify-center py-[3rem] px-[1rem] font-inter">
      <div className="flex items-center gap-[8rem] w-[45rem] rounded-[10px] py-[0.5rem] px-[3rem] bg-gradient-to-r from-[rgba(233,230,206,1)] to-[rgba(151,173,177,1)]">
        <div className="text-center">
          <FaWallet className="text-[5rem] text-[#405200]" />
          <h1 className="font-[600] text-[1.5rem]">Wallet</h1>
        </div>
        <div className="grid text-center">
          <h1>Total Balance</h1>
          <h1 className="text-[3rem] font-[600] text-primaryOne">$300,000.00</h1>
        </div>
      </div>

      <h1 className="mt-[2rem] text-[1.3rem] font-[600]">Transaction History</h1>
      <div className="grid justify-center gap-[1rem]">
          {data.map((data, index) => {
            return (
              <div
                key={index}
                className="bg-primaryTwo w-[40rem] grid gap-[1rem] px-[2rem] py-[1rem] rounded-[5px]"
              >
                <h1>{data.text}</h1>
              </div>
            );
          })}
        </div>
    </div>
  );
}
