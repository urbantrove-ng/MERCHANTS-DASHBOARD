import checklist from "../assets/checklist.png";
import { TfiPlus } from "react-icons/tfi";
import DisplaySideBar from "../features/RightSideBar/DisplaySideBar";
import { useEffect, useRef, useState } from "react";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import axios, { axiosPrivate } from "../Api/axios";
import Spinner from "../components/Spinner";
export default function Services() {
  const [files, setFiles] = useState([null, null, null]);
  const [address, setAddress] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [description, setDescription] = useState("");
  const [selectedFiles, setSelectedFiles] = useState(["", "", ""]);
  const [subscriptionStatus, setSubscriptionStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [productName, setProductName] = useState("");
  const [creatingService, setIsCreatingService] = useState(false);

  const fileInputRef1 = useRef(null);
  const fileInputRef2 = useRef(null);
  const fileInputRef3 = useRef(null);
  const checkSubscription = async () => {
    try {
      const response = await axiosPrivate.get("/subscription");
      setSubscriptionStatus(response.data.active);
    } catch (error) {
      console.error("Error checking subscription status:", error);
    }
  };
  useEffect(() => {
    checkSubscription();
  }, []);
  const handleFileInputClick = (ref) => {
    ref.current.click();
  };
  const handleFileChange = (index, e) => {
    const newFiles = [...files];
    newFiles[index] = e.target.files[0];
    const newSelectedFiles = [...selectedFiles];
    newSelectedFiles[index] = newFiles[index].name;
    setSelectedFiles(newSelectedFiles);
    setFiles(newFiles);
  };

  const addServices = async () => {
    if (subscriptionStatus === false) {
      alert("You need to subscribe before adding services.");
      setErrorMessage("You need to subscribe before adding services.");
      return;
    }
    setIsCreatingService(true);
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
        .map((response) => {
          let url = response.data.secure_url || response.data.url;
          if (url.startsWith("http://")) {
            url = url.replace("http://", "https://");
          }
          return url;
        });

      const SERVICES_UPLOADURL = "/product";
      const response = await axiosPrivate.post(
        SERVICES_UPLOADURL,
        JSON.stringify({
          productName,
          productType: "services",
          header: productName,
          images: imageUrls.map((url) => ({ url })),
          description,
          prices: {
            actualPrice: price,
            discount,
          },
          delivery: {
            handledByVendor: true,
            deliveryService: null,
          },
        }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      if (response.status === 200) {
        setIsCreatingService(false);
        setFiles([null, null, null, null]);
        setProductName("");
        setDescription("");
        setPrice("");
        setAddress("");
        setDiscount("");
        setErrorMessage("");
      }
    } catch (error) {
      console.error("Error adding services:", error);
      setIsCreatingService(false);
    }
  };

  return (
    <div className="relative grid gap-[3rem] lg:w-[812px]   scrollbar-thumb-rounded-full scrollbar-track-rounded-full lg:scrollbar scrollbar-thumb-primaryOne scrollbar-track-primaryTwo  overflow-y-scroll max-h-[75vh] lg:h-[90vh] justify-center py-[3rem]  px-[1rem]  font-inter">
      {/* Subscription Check */}
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}

      {/* Rest of your component */}
      <div className="fixed top-[10.6rem] sm:top-[9.3rem] right-0 z-10">
        <DisplaySideBar />
      </div>
      <div className=" flex justify-center items-center">
        <div className="flex items-center gap-8   lg:w-[40rem] rounded-[10px] w-full h-[60px]   lg:h-[171px] bg-gradient-to-r from-[rgba(233,230,206,1)] to-[rgba(151,173,177,1)]">
          <div className="relative flex items-center ">
            <img
              src={checklist}
              className=" lg:w-[245px] lg:h-[247px] h-[80px] "
              alt=""
            />
            <img
              src={checklist}
              className="  lg:w-[145px] lg:h-[147px] h-[40px] absolute lg:right-0  -right-3"
              alt=""
            />
          </div>
          <h1 className="font-[600] lg:text-[40px] text-center">Services</h1>
        </div>
      </div>
      <div className=" flex justify-center items-center ">
        <div className="lg:w-[705px] lg:h-[610px] w-[300px] bg-white flex justify-center h-[420px]  items-center rounded-[10px]">
          <div className=" flex flex-col items-center gap-4">
            <h1 className="text-[0.8rem] lg:text-[1rem] font-[600]">
              Update Service Information
            </h1>
            <div className="grid grid-cols-3 gap-4">
              {[fileInputRef1, fileInputRef2, fileInputRef3].map(
                (ref, index) => (
                  <div key={index}>
                    <div
                      className="lg:w-[203px] lg:h-[203px] w-[80px] h-[80px] flex justify-center items-center bg-primaryTwo rounded-[5px] text-[#a7a7a7] hover:text-black cursor-pointer transition-all duration-300"
                      onClick={() => handleFileInputClick(ref)}
                    >
                      <div className="flex flex-col items-center">
                        <TfiPlus className="text-[2rem]" />
                        <p className="lg:text-[0.7rem] text-[8px]">Add Image</p>
                      </div>
                      <input
                        type="file"
                        ref={ref}
                        className="hidden"
                        onChange={(e) => handleFileChange(index, e)}
                      />
                    </div>
                    {selectedFiles[index] && (
                      <p className="mt-2 text-[0.6rem] lg:text-[0.8rem] text-center lg:w-[203px]">
                        {selectedFiles[index]}
                      </p>
                    )}
                  </div>
                )
              )}
            </div>
            <div className="grid justify-center">
              <form action="" className=" flex flex-col items-center gap-4">
                <div className=" w-full">
                  <input
                    type="text"
                    value={productName}
                    required
                    onChange={(e) => setProductName(e.target.value)}
                    placeholder="Add Service Name"
                    className="bg-primaryTwo lg:w-full lg:h-[49px] w-[200px] flex justify-center h-[30px] items-start pl-4 rounded-[5px] focus:outline-none sm:placeholder:text-[0.8rem] placeholder:text-[0.8rem]"
                  />
                </div>
                <div className="">
                  <input
                    type="text"
                    value={address}
                    required
                    onChange={(e) => setAddress(e.target.value)}
                    autoComplete="street-address"
                    placeholder="Add Address"
                    className="bg-primaryTwo lg:w-[640px] h-[30px] w-[270px] lg:h-[60px] pl-4 rounded-[5px] focus:outline-none"
                  />
                </div>
                <div className="">
                  <textarea
                    placeholder="Add Description"
                    autoComplete="on"
                    value={description}
                    required
                    onChange={(e) => setDescription(e.target.value)}
                    className="bg-primaryTwo lg:w-[640px] w-[270px] lg:p-4 p-2 rounded-[5px] focus:outline-none"
                    name="description"
                    id="description"
                    cols="30"
                    rows="4"
                  ></textarea>
                </div>
                <div></div>
                <div className="  flex  items-center gap-2 lg:w-full w-[200px]  ">
                  <input
                    type="number"
                    id="price"
                    value={price}
                    required
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="Add Services Price"
                    className="bg-primaryTwo  lg:h-[49px] lg:w-full h-[30px] flex justify-center w-[200px]  items-start pl-4 rounded-[5px] focus:outline-none lg:placeholder:text-[0.8rem] placeholder:text-[0.8rem]"
                  />
                  <input
                    value={discount}
                    onChange={(e) => setDiscount(e.target.value)}
                    type="number"
                    id="price"
                    required
                    placeholder="Add Discount"
                    className="bg-primaryTwo  lg:h-[49px] flex lg:w-full h-[30px] justify-center w-[200px]  items-start pl-4 rounded-[5px] focus:outline-none lg:placeholder:text-[0.8rem] placeholder:text-[0.8rem]"
                  />
                </div>
                <button
                  type="button"
                  onClick={addServices}
                  className="flex m-auto bg-primaryOne px-[3rem] py-[0.7rem] rounded-[5px] text-white"
                >
                  {creatingService ? <Spinner /> : "Publish"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
