import { useEffect, useState } from "react";
import DisplaySideBar from "../features/RightSideBar/DisplaySideBar";
import useAxiosPrivate from "../hooks/useAxiosPrivate";

export default function Notifications() {
  const [orders, setOrders] = useState([]);
  const axiosPrivate = useAxiosPrivate();

  const getAllOrders = async () => {
    const res = await axiosPrivate.get("/mercantOrder");
    setOrders(res?.data);
  };
  useEffect(() => {
    getAllOrders();
  }, []);

  return (
    <div className="relative grid gap-[2rem] lg:w-[812px] w-[85vw]  scrollbar-thumb-rounded-full scrollbar-track-rounded-full lg:scrollbar scrollbar-thumb-primaryOne scrollbar-track-primaryTwo  overflow-y-scroll max-h-[75vh] lg:h-[90vh] justify-center lg:py-6  font-inter">
      <div className="fixed top-[10.6rem] sm:top-[9.3rem] right-0 z-10">
        <DisplaySideBar />
      </div>
      <div className=" flex justify-center items-center">
        <div className="lg:w-[761px] h-[60px] w-[300px] rounded-[10px] flex justify-start items-center pl-4 bg-gradient-to-r from-[rgba(233,230,206,1)] to-[rgba(151,173,177,1)]">
          <h1 className="font-[600] text-[1.5rem] sm:text-[1.2rem]">
            My Notifications
          </h1>
        </div>
      </div>
      <div className="flex flex-col items-center gap-4">
        <div className="bg-white">
          <div className="mx-auto lg:w-[700px] w-[300px] px-4  sm:px-6 lg:px-8 ">
            <div className="">
              <div className="space-y-20">
                <div>
                  <h3 className="sr-only">
                    Order placed on
                    {/* <time dateTime={order.datetime}>{order.date}</time> */}
                  </h3>
                  <table className="mt-4 w-full text-gray-500 sm:mt-6">
                    <caption className="sr-only">Products</caption>
                    <thead className="sr-only text-left text-sm text-gray-500 sm:not-sr-only">
                      <tr>
                        <th
                          scope="col"
                          className="py-3 pr-8 font-normal sm:w-2/5 lg:w-1/3"
                        >
                          Product
                        </th>
                        <th
                          scope="col"
                          className="hidden w-1/5 py-3 pr-8 font-normal sm:table-cell"
                        >
                          Price
                        </th>
                        <th
                          scope="col"
                          className="hidden py-3 pr-8 font-normal sm:table-cell"
                        >
                          Quantity
                        </th>
                        <th
                          scope="col"
                          className="hidden py-3 pr-8 font-normal sm:table-cell"
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
                    <tbody className="divide-y divide-gray-200 border-b border-gray-200 text-sm sm:border-t">
                      {orders?.map((order) =>
                        order.items.map((item) => (
                          <tr key={item.product._id}>
                            <td className="py-6 pr-8">
                              <div className="flex items-center">
                                <img
                                  alt={item.product.productName}
                                  src={item.product.images[0]?.url}
                                  className="mr-6 h-16 w-16 rounded object-cover object-center"
                                />
                                <div>
                                  <div className="font-medium text-gray-900">
                                    {item.product.productName}
                                  </div>
                                  <div className="mt-1 sm:hidden">
                                    {item.total}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="hidden py-6 pr-8 sm:table-cell">
                              ₦{Number(item.total).toLocaleString()}
                            </td>
                            <td className="hidden py-6 pr-8 sm:table-cell">
                              {item.quantity}
                            </td>
                            <td className=" ">
                              <p
                                className={
                                  order.status === "completed"
                                    ? "hidden  rounded-2xl sm:table-cell mr-14 text-green-400 bg-green-200 h-6 lg:flex justify-center items-center "
                                    : "hidden  rounded-2xl  sm:table-cell mr-14 text-red-500 bg-red-200 h-6 lg:flex justify-center items-center "
                                }
                              >
                                {order.status}
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
  );
}
