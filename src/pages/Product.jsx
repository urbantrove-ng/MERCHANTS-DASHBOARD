import { useEffect, useState } from "react";
import DisplaySideBar from "../features/RightSideBar/DisplaySideBar";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import axios from "../Api/axios";
import { MdOutlineUploadFile } from "react-icons/md";
import Spinner from "../components/Spinner";

const categoriesData = [
  {
    category_name: "Fashion & Accessories",
    category_type: "products",
    sub_category: "Clothing (Men's, Women's, Children's)",
  },
  {
    category_name: "Fashion & Accessories",
    category_type: "products",
    sub_category: "Shoes & Footwear",
  },
  {
    category_name: "Fashion & Accessories",
    category_type: "products",
    sub_category: "Handbags & Accessories",
  },
  {
    category_name: "Fashion & Accessories",
    category_type: "products",
    sub_category: "Jewelry & Watches",
  },
  {
    category_name: "Electronics & Gadgets",
    category_type: "products",
    sub_category: "Smartphones & Tablets",
  },
  {
    category_name: "Electronics & Gadgets",
    category_type: "products",
    sub_category: "Computers & Laptops",
  },
  {
    category_name: "Electronics & Gadgets",
    category_type: "products",
    sub_category: "Cameras & Photography Equipment",
  },
  {
    category_name: "Electronics & Gadgets",
    category_type: "products",
    sub_category: "Audio & Video Devices",
  },
  {
    category_name: "Home & Garden",
    category_type: "products",
    sub_category: "Furniture & Decor",
  },
  {
    category_name: "Home & Garden",
    category_type: "products",
    sub_category: "Kitchenware & Cooking Utensils",
  },
  {
    category_name: "Home & Garden",
    category_type: "products",
    sub_category: "Home Appliances",
  },
  {
    category_name: "Home & Garden",
    category_type: "products",
    sub_category: "Gardening Supplies",
  },
  {
    category_name: "Health & Beauty",
    category_type: "products",
    sub_category: "Skincare Products",
  },
  {
    category_name: "Health & Beauty",
    category_type: "products",
    sub_category: "Haircare Products",
  },
  {
    category_name: "Health & Beauty",
    category_type: "products",
    sub_category: "Makeup & Cosmetics",
  },
  {
    category_name: "Health & Beauty",
    category_type: "products",
    sub_category: "Personal Care Appliances",
  },
  {
    category_name: "Sports & Outdoors",
    category_type: "products",
    sub_category: "Athletic Apparel & Footwear",
  },
  {
    category_name: "Sports & Outdoors",
    category_type: "products",
    sub_category: "Sports Equipment (e.g., yoga mats, weights, bicycles)",
  },
  {
    category_name: "Sports & Outdoors",
    category_type: "products",
    sub_category: "Camping & Hiking Gear",
  },
  {
    category_name: "Sports & Outdoors",
    category_type: "products",
    sub_category: "Outdoor Recreation Accessories",
  },
  {
    category_name: "Books & Stationery",
    category_type: "products",
    sub_category: "Fiction & Non-fiction Books",
  },
  {
    category_name: "Books & Stationery",
    category_type: "products",
    sub_category: "Office Supplies",
  },
  {
    category_name: "Books & Stationery",
    category_type: "products",
    sub_category: "Writing Instruments",
  },
  {
    category_name: "Books & Stationery",
    category_type: "products",
    sub_category: "Art Supplies",
  },
  {
    category_name: "Food & Beverages",
    category_type: "products",
    sub_category: "Gourmet Foods & Snacks",
  },
  {
    category_name: "Food & Beverages",
    category_type: "products",
    sub_category: "Beverages (e.g., coffee, tea, wine)",
  },
  {
    category_name: "Food & Beverages",
    category_type: "products",
    sub_category: "Specialty Ingredients",
  },
  {
    category_name: "Food & Beverages",
    category_type: "products",
    sub_category: "Cooking & Baking Supplies",
  },
  {
    category_name: "Electrical & Home Appliances",
    category_type: "products",
    sub_category:
      "Kitchen Appliances (e.g., blenders, toasters, coffee makers)",
  },
  {
    category_name: "Electrical & Home Appliances",
    category_type: "products",
    sub_category: "Laundry Appliances",
  },
  {
    category_name: "Electrical & Home Appliances",
    category_type: "products",
    sub_category: "Vacuum Cleaners",
  },
  {
    category_name: "Electrical & Home Appliances",
    category_type: "products",
    sub_category: "Air Conditioners & Fans",
  },
  {
    category_name: "Automotive & Accessories",
    category_type: "products",
    sub_category: "Car Parts & Accessories",
  },
  {
    category_name: "Automotive & Accessories",
    category_type: "products",
    sub_category: "Car Care Products",
  },
  {
    category_name: "Automotive & Accessories",
    category_type: "products",
    sub_category: "Automotive Electronics",
  },
  {
    category_name: "Automotive & Accessories",
    category_type: "products",
    sub_category: "Vehicle Maintenance Tools",
  },
];

export default function Product() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [subCategories, setSubCategories] = useState([]);
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
  const [description, setDescription] = useState("");
  const [productName, setProductName] = useState("");
  const [files, setFiles] = useState([null, null, null, null]);
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const axiosPrivate = useAxiosPrivate();
  const [viewAll, setViewAll] = useState(false);
  const [newdata, setData] = useState([]);
  const [creatingProduct, setIsCreatingProduct] = useState(false);
  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setSelectedCategory(selectedCategory);

    const filteredSubCategories = categoriesData
      .filter((category) => category.category_name === selectedCategory)
      .map((category) => category.sub_category);

    setSubCategories(filteredSubCategories);
  };
  const handleSubCategoryChange = (e) => {
    setSelectedSubCategory(e.target.value);
  };
  const handleFileChange = (index, e) => {
    const newFiles = [...files];
    newFiles[index] = e.target.files[0];
    setFiles(newFiles);
  };

  const addProduct = async () => {
    setIsCreatingProduct(true);
    try {
      const uploadPromises = files.map((file) => {
        if (file) {
          const formData = new FormData();
          formData.append("file", file);
          formData.append("upload_preset", "h6iws5si");

          return axios.post(
            "https://api.cloudinary.com/v1_1/echefula5/image/upload",
            formData
          );
        }
        return null;
      });

      const uploadResponses = await Promise.all(uploadPromises);

      const imageUrls = uploadResponses
        .filter((response) => response && response.status === 200)
        .map((response) => response.data.url);

      const PRODUCT_UPLOADURL = "/product";
      const response = await axiosPrivate.post(
        PRODUCT_UPLOADURL,
        JSON.stringify({
          category_name: selectedCategory,
          sub_category: selectedSubCategory,
          productName,
          productType: "product",
          header: productName,
          images: imageUrls.map((url) => ({ url })),
          description,
          prices: {
            actualPrice: price,
            discount,
          },
        }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      if (response.status === 200) {
        setIsCreatingProduct(false);
        setFiles([null, null, null, null]);
        setIsCreatingProduct(false);
        setSelectedCategory("");
        setSelectedSubCategory("");
        setProductName("");
        setDescription("");
        setPrice("");
        setDiscount("");
      }
    } catch (error) {
      setIsCreatingProduct(false);
      console.error("Error adding product:", error);s
    }
  };

  const getAllProducts = async () => {
    const res = await axiosPrivate.get("/product");
    setData(res?.data?.products);
  };
  useEffect(() => {
    getAllProducts();
  }, []);
  const deleteProduct = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        await axiosPrivate.delete(`/product/${id}`);
        getAllProducts();
      } catch (error) {
        console.error("Error deleting product:", error);
        // You might want to show an alert or a toast notification here
      }
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct();
  };
  const data = newdata?.slice(0, 3);
  const shortename = (name) => {
    const shortHashName = `${name.slice(0, 20)}...`;
    return shortHashName;
  };
  return (
    <div className="relative grid gap-[2rem] h-auto lg:w-[812px] w-full  scrollbar-thumb-rounded-full scrollbar-track-rounded-full lg:scrollbar scrollbar-thumb-primaryOne scrollbar-track-primaryTwo  overflow-y-scroll max-h-[75vh] lg:h-[90vh] justify-center lg:py-6 py-6  font-inter">
      <div className="fixed top-[10.6rem] sm:top-[9.3rem] right-0 z-10">
        <DisplaySideBar />
      </div>
      <div className=" flex justify-center items-center">
        <div className="lg:w-[761px] h-[60px] w-[300px] rounded-[10px] flex justify-start items-center pl-4 bg-gradient-to-r from-[rgba(233,230,206,1)] to-[rgba(151,173,177,1)]">
          <h1 className="font-[600] text-[1.5rem] sm:text-[1.2rem]">
            My Products
          </h1>
        </div>
      </div>
      <div className=" flex justify-center items-center">
        <div
          className={
            !viewAll
              ? "flex justify-center items-center  bg-white lg:w-[761px] lg:h-[208.99px] w-[310px] h-[250px]  rounded-[10px]"
              : "flex justify-center items-center  bg-white lg:w-[761px]  w-[310px] h-full  rounded-[10px]"
          }
        >
          {!viewAll && (
            <div className=" flex flex-col gap-4 items-center">
              <div className="flex gap-[4rem]  text-[0.9rem] font-[600]">
                <p className="font-medium text-[16.01px]">Products</p>
                <button
                  onClick={() => setViewAll(true)}
                  className="text-primaryOne font-medium text-[16.01px] cursor-pointer"
                >
                  View All
                </button>
              </div>
              <div className="grid lg:grid-cols-3 lg:gap-[1rem] gap-2 grid-cols-2 ">
                {data?.map((data, index) => {
                  const { productName, status } = data;

                  return (
                    <div
                      key={index}
                      className="w-[9rem] lg:w-[204.97px] lg:h-[123.27px]  bg-[#D2D2D221] flex justify-center items-center rounded-[10px] border-primaryOne border-[1px]"
                    >
                      <div className="rounded-[5px] lg:w-[50%] ">
                        <img
                          src={data?.images[0]?.url}
                          alt=""
                          className="w-[91px] lg:w-full lg:h-[110.27px] h-[80px] rounded-l-lg  object-cover rounded-tl-[5px] rounded-bl-[5px] border-primaryOne border-r-[1px]"
                        />
                      </div>
                      <div className="grid gap-[0.3rem] lg:text-[0.8rem] text-[10px] lg:w-[50%]  text-center">
                        <h1>{shortename(productName)}</h1>
                        <h1 className="text-center font-[500] text-[#a7a7a7] text-[0.8rem] lg:text-[1rem]">
                          ₦ {Number(data?.prices?.actualPrice).toLocaleString()}
                        </h1>
                        <h1 className="text-center lg:text-[0.8rem] text-[8px] ">
                          {status}
                        </h1>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          {viewAll && (
            <div className="bg-white">
              <div className="mx-auto lg:w-[700px] px-4  sm:px-6 lg:px-8 ">
                <div className="">
                  <h2 className="sr-only">Recent orders</h2>

                  <div className="space-y-20">
                    <div>
                      <h3 className="sr-only">Order placed on</h3>

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
                          {newdata?.map((product) => (
                            <tr key={product._id}>
                              <td className="py-6 pr-8">
                                <div className="flex items-center">
                                  <img
                                    alt={product.productName}
                                    src={product.images[0]?.url}
                                    className="mr-6 h-16 w-16 rounded object-cover object-center"
                                  />
                                  <div>
                                    <div className="font-medium text-gray-900">
                                      {shortename(product.productName)}
                                    </div>
                                    <div className="mt-1 sm:hidden">
                                      ₦{" "}
                                      {Number(
                                        product?.prices?.actualPrice
                                      ).toLocaleString()}
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="hidden py-6 pr-8 sm:table-cell">
                                ₦
                                {Number(
                                  product?.prices?.actualPrice
                                ).toLocaleString()}
                              </td>
                              <td className="hidden py-6 pr-8 sm:table-cell">
                                available{" "}
                              </td>
                              <td className="whitespace-nowrap py-6 text-right font-medium">
                                <button
                                  onClick={() => deleteProduct(product._id)}
                                  className="text-red-500"
                                >
                                  Delete
                                  <span className="hidden lg:inline">
                                    {" "}
                                    Product
                                  </span>
                                  <span className="sr-only">
                                    , {product.name}
                                  </span>
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className=" flex justify-center items-center">
        <div className="lg:w-[761px] h-[60px] w-[300px] rounded-[10px] flex justify-start items-center pl-4 bg-gradient-to-r from-[rgba(233,230,206,1)] to-[rgba(151,173,177,1)]">
          <h1 className="font-[600] text-[1.5rem] sm:text-[1.2rem]">
            Add Products
          </h1>
        </div>
      </div>
      <div className=" flex justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="flex justify-around gap-[0.5rem] lg:gap-[0.5rem] lg:w-[761px] w-[300px]  bg-white lg:px-[2rem] px-[0.5rem] py-[1rem] rounded-[10px]"
        >
          <div className=" flex flex-col items-center gap-2">
            <div className="grid grid-cols-2 gap-4 mb-4">
              {files.map((file, index) => (
                <div
                  key={index}
                  className="bg-primaryTwo lg:w-[40px] lg:h-[40px] h-[30px] w-[30px] flex flex-col justify-center items-center rounded-[10px] relative"
                >
                  <input
                    type="file"
                    id={`file-upload-${index}`}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                    accept="image/*"
                    onChange={(e) => handleFileChange(index, e)}
                  />
                  <label
                    htmlFor={`file-upload-${index}`}
                    className="lg:text-[12px] text-[8px] cursor-pointer text-[gray] hover:text-black flex justify-center items-center w-full h-full"
                  >
                    {file ? <MdOutlineUploadFile /> : "Add"}
                  </label>
                </div>
              ))}
            </div>
            <div className=" gap-[0.5rem] text-[0.9rem] flex flex-col items-center">
              <h1 className="lg:text-[0.8rem] text-[8px] text-center">
                Change Background
              </h1>
              <div className="flex gap-[0.1rem] lg:gap-[0.2rem]">
                <div className="w-[1rem] lg:w-[2rem] h-[1rem] lg:h-[2rem] bg-black rounded-[5px] cursor-pointer"></div>
                <div className="w-[1rem] lg:w-[2rem] h-[1rem] lg:h-[2rem] bg-[#7d972e] rounded-[5px] cursor-pointer"></div>
              </div>
            </div>
          </div>
          <div
            action=""
            className=" flex flex-col items-center gap-2"
            onSubmit={handleSubmit}
          >
            <div className="">
              <input
                type="text"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                placeholder="Add Product Name"
                className="bg-primaryTwo lg:w-[486px] lg:h-[49px] w-[200px] flex justify-center items-start pl-4 rounded-[5px] focus:outline-none sm:placeholder:text-[0.8rem] placeholder:text-[0.8rem]"
              />
            </div>
            <div className="flex flex-col space-y-4">
              <select
                id="category"
                value={selectedCategory}
                onChange={handleCategoryChange}
                className="bg-primaryTwo lg:w-[486px] lg:h-[49px] w-[200px]  flex justify-center items-center pl-4 pr-8 rounded-[5px] focus:outline-none text-[0.8rem] lg:text-[0.8rem] appearance-none"
              >
                <option value="" disabled hidden>
                  Select Product Category
                </option>
                {Array.from(
                  new Set(
                    categoriesData.map((category) => category.category_name)
                  )
                ).map((categoryName) => (
                  <option key={categoryName} value={categoryName}>
                    {categoryName}
                  </option>
                ))}
              </select>

              {selectedCategory && (
                <select
                  id="sub-category"
                  value={selectedSubCategory}
                  onChange={handleSubCategoryChange}
                  className="bg-primaryTwo lg:w-[486px] lg:h-[49px] w-[200px]  flex justify-center items-center pl-4 pr-8 rounded-[5px] focus:outline-none text-[0.8rem] lg:text-[0.8rem] appearance-none"
                >
                  <option value="" disabled selected hidden>
                    Select Subcategory
                  </option>
                  {subCategories.map((subCategory, index) => (
                    <option key={index} value={subCategory}>
                      {subCategory}
                    </option>
                  ))}
                </select>
              )}
            </div>
            <div className="">
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Add Product Description"
                className="bg-primaryTwo lg:w-[486px]  flex justify-center w-[200px]  items-start lg:p-4 p-2 rounded-[5px] focus:outline-none lg:placeholder:text-[0.8rem] placeholder:text-[0.8rem]"
                name=""
                id=""
                cols="30"
                rows="2"
              ></textarea>
            </div>
            <div className="  flex flex-col items-center gap-2 lg:w-[486px] w-[200px]  ">
              <input
                type="number"
                id="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Add Product Price"
                className="bg-primaryTwo  lg:h-[49px] lg:w-full flex justify-center w-[200px]  items-start pl-4 rounded-[5px] focus:outline-none lg:placeholder:text-[0.8rem] placeholder:text-[0.8rem]"
              />
              <input
                value={discount}
                onChange={(e) => setDiscount(e.target.value)}
                type="number"
                id="price"
                placeholder="Add Discount"
                className="bg-primaryTwo  lg:h-[49px] flex lg:w-full justify-center w-[200px]  items-start pl-4 rounded-[5px] focus:outline-none lg:placeholder:text-[0.8rem] placeholder:text-[0.8rem]"
              />
            </div>
            <button
              disabled={creatingProduct}
              className="flex m-auto bg-primaryOne px-[3rem] py-[0.7rem] rounded-[5px] text-white"
            >
              {creatingProduct ? <Spinner /> : "Save"}
            </button>
          </div>
        </form>
      </div>

      <div className=" flex justify-center items-center">
        <div className="lg:w-[761px] h-[60px] w-[300px] rounded-[10px] flex justify-start items-center pl-4 bg-gradient-to-r from-[rgba(233,230,206,1)] to-[rgba(151,173,177,1)]">
          <h1 className="font-[600] text-[1.5rem] sm:text-[1.2rem]">
            Delivery
          </h1>
        </div>
      </div>
      <div className="flex justify-center items-center lg:w-[761px] bg-white  w-[300px]  rounded-[10px] py-4 lg:h-[484px]">
        <form action="" className=" flex flex-col gap-4 items-center ">
          <div className="">
            <input
              type="text"
              placeholder="Name This Delivery"
              className="bg-primaryTwo lg:w-[723px] lg:h-[53px] w-[280px] rounded-[5px] pl-4 focus:outline-none lg:placeholder:text-[1rem] placeholder:text-[0.8rem]"
            />
          </div>
          <div className="">
            <input
              type="text"
              placeholder="Region"
              className="bg-primaryTwo lg:w-[723px] lg:h-[53px] rounded-[5px] w-[280px] pl-4 focus:outline-none lg:placeholder:text-[1rem] placeholder:text-[0.8rem]"
            />
          </div>
          <div className="">
            <label htmlFor="" className="text-[0.9rem] text-[#a7a7a7]">
              Days It Takes To Deliver
            </label>
            <div className="flex item-center lg:gap-16 gap-4 w-full">
              <input
                type="text"
                placeholder="From"
                className="bg-primaryTwo lg:w-[330px] w-[130px] lg:h-[53px] rounded-[5px] pl-4 focus:outline-none lg:placeholder:text-[1rem] placeholder:text-[0.8rem]"
              />
              <input
                type="text"
                placeholder="To"
                className="bg-primaryTwo lg:w-[330px] w-[130px] lg:h-[53px] rounded-[5px] pl-4 focus:outline-none lg:placeholder:text-[1rem] placeholder:text-[0.8rem]"
              />
            </div>
          </div>
          <div className="">
            <input
              type="text"
              placeholder="Do You Charge For Delivery?"
              className="bg-primaryTwo lg:w-[723px] lg:h-[53px] w-[280px] rounded-[5px] pl-4 focus:outline-none lg:placeholder:text-[1rem] placeholder:text-[0.8rem]"
            />
          </div>
          <div className="">
            <input
              type="text"
              placeholder="Add Delivery Price"
              className="bg-primaryTwo lg:w-[723px] lg:h-[53px] w-[280px] rounded-[5px] pl-4 focus:outline-none lg:placeholder:text-[1rem] placeholder:text-[0.8rem]"
            />
          </div>
          <button className="flex m-auto bg-primaryOne lg:w-[304px] w-[200px] justify-center items-center lg:h-[48px] rounded-[5px]  text-white">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
