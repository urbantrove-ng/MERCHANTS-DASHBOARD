import { FaWallet } from "react-icons/fa";
import DisplaySideBar from "../features/RightSideBar/DisplaySideBar";
import { useEffect, useState } from "react";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { FaCheckCircle } from "react-icons/fa";

export default function Wallet() {
  const [orders, setOrders] = useState([]);
  const axiosPrivate = useAxiosPrivate();

  const getAllOrders = async () => {
    const res = await axiosPrivate.get("/mercantOrder");
    setOrders(res?.data);
  };
  useEffect(() => {
    getAllOrders();
  }, []);
  const getTotalForCompletedOrders = () => {
    return orders
      .filter((order) => order.status === "completed")
      .reduce((acc, order) => {
        const orderTotal = order.items.reduce(
          (itemAcc, item) => itemAcc + item.total,
          0
        );
        return acc + orderTotal;
      }, 0);
  };

  const totalCompletedOrders = getTotalForCompletedOrders();
  return (
    <div className="relative grid gap-[2rem] lg:w-[812px] scrollbar-thumb-rounded-full scrollbar-track-rounded-full lg:scrollbar scrollbar-thumb-primaryOne scrollbar-track-primaryTwo overflow-y-scroll max-h-[75vh] lg:h-[90vh] justify-center lg:py-6 font-inter">
      <div className="fixed top-[10.6rem] sm:top-[9.3rem] right-0 z-10">
        <DisplaySideBar />
      </div>
      <div className="flex justify-between items-center lg:gap-[8rem] w-[300px] lg:w-[700px] sm:w-[83vw] rounded-[10px] py-[0.5rem] px-[3rem] sm:px-[1rem] bg-gradient-to-r from-[rgba(233,230,206,1)] to-[rgba(151,173,177,1)]">
        <div className="flex flex-col items-center">
          <FaWallet className="text-[2rem] lg:text-[3.5rem] text-[#405200]" />
          <h1 className="font-[600] text-[1rem] lg:text-[1.2rem]">Wallet</h1>
        </div>
        <div className="grid text-center">
          <h1>Total Balance</h1>
          <h1 className="text-[1rem] lg:text-[1.5rem] font-[600] text-primaryOne">
            ₦{totalCompletedOrders.toLocaleString()}
          </h1>
        </div>
      </div>

      <h1 className="text-[1.3rem] sm:text-[1.1rem] font-[600]">
        Transaction History
      </h1>
      <div className="grid justify-center gap-[1rem]">
        <div className="flex flex-col items-center gap-4">
          <div className="bg-white">
            <div className="mx-auto lg:w-[700px] w-[300px] px-4  sm:px-6 lg:px-8 ">
              <div className="">
                <div className="space-y-20">
                  <div>
                    <table className="mt-4 w-full text-gray-500 sm:mt-6">
                      <thead className="sr-only text-left text-sm text-gray-500 sm:not-sr-only">
                        <tr>
                          <th
                            scope="col"
                            className=" w-1/5 py-3 pr-8 font-normal sm:table-cell"
                          >
                            Order No
                          </th>
                          <th
                            scope="col"
                            className=" w-1/5 py-3 pr-8 font-normal sm:table-cell"
                          >
                            Price
                          </th>
                          <th
                            scope="col"
                            className=" py-3 pr-8 font-normal sm:table-cell"
                          >
                            Product
                          </th>
                          <th
                            scope="col"
                            className=" py-3 pr-8 font-normal sm:table-cell"
                          >
                            Status
                          </th>
                          <th
                            scope="col"
                            className="w-0 py-3 text-right font-normal"
                          >
                            Info
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y  divide-gray-200 border-b border-gray-200 text-sm sm:border-t">
                        {orders?.map((order) =>
                          order.items.map((item) => (
                            <tr key={item.product._id} >
                              <td className="py-6 pr-8">
                                <div className="flex items-center">
                                  <div>
                                    <div className="font-medium text-gray-900">
                                      #{order?.orderNo}
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className=" py-6 pr-8 sm:table-cell">
                                ₦{Number(item.total).toLocaleString()}
                              </td>
                              <td className="hidden py-6 pr-8 sm:table-cell">
                                <div>
                                  <p>{item.product.productName}</p>{" "}
                                  <p> {item.quantity}pcs</p>
                                </div>
                              </td>
                              <td className="lg:block hidden">
                                <p
                                  className={
                                    order.status === "completed"
                                      ? " rounded-2xl sm:table-cell mr-14 text-green-400 bg-green-200 h-6 lg:flex justify-center px-2 items-center "
                                      : " rounded-2xl sm:table-cell mr-14 text-red-500 bg-red-200 h-6 lg:flex justify-center items-center "
                                  }
                                >
                                  {order.status === "completed"
                                    ? "success"
                                    : "failed"}
                                </p>
                              </td>
                              <td className="">
                                <p
                                  className={
                                    order.status === "completed"
                                      ? " rounded-2xl sm:table-cell  text-green-400   lg:flex justify-center px-2 items-center "
                                      : " rounded-2xl sm:table-cell  text-red-500   lg:flex justify-center items-center "
                                  }
                                >
                                  {order.status === "completed" ? (
                                    <FaCheckCircle />
                                  ) : (
                                    <FaCheckCircle />
                                  )}
                                </p>
                              </td>
                              <td className="whitespace-nowrap py-6 text-right font-medium">
                                <a
                                  href={item.product.href}
                                  className="text-indigo-600"
                                >
                                  View
                                  <span className="sr-only">
                                    , {item.product.productName}
                                  </span>
                                </a>
                              </td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
