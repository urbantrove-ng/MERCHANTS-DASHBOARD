import rating from "../assets/Rating.png";
import DisplaySideBar from "../features/RightSideBar/DisplaySideBar";

const data = [
  {
    name: "Ayodele",
    time: "1 Month Ago",
    rating: rating,
    avatar: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
        />
      </svg>
    ),
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Abraham",
    time: "1 Week Ago",
    rating: rating,
    avatar: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
        />
      </svg>
    ),
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Fatima",
    time: "2 Days Ago",
    rating: rating,
    avatar: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
        />
      </svg>
    ),
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Astro Dev",
    time: "2 Months Ago",
    rating: rating,
    avatar: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
        />
      </svg>
    ),
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Usman",
    time: "3 Months Ago",
    rating: rating,
    avatar: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
        />
      </svg>
    ),
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];
export default function Feedback() {
  return (
    <section className="flex justify-center">
      <div className="relative grid gap-[2rem] lg:w-[812px] w-[100%] scrollbar-thumb-rounded-full scrollbar-track-rounded-full lg:scrollbar scrollbar-thumb-primaryOne scrollbar-track-primaryTwo overflow-y-scroll max-h-[75vh] lg:h-[90vh] justify-center lg:py-6 font-inter">
        <div className="fixed top-[10.6rem] sm:top-[9.3rem] right-0 z-10">
          <DisplaySideBar />
        </div>
        <div className="flex justify-center items-center">
          <div className="lg:w-[761px] h-[60px] w-[100%] rounded-[10px] flex justify-start items-center pl-4 bg-gradient-to-r from-[rgba(233,230,206,1)] to-[rgba(151,173,177,1)]">
            <h1 className="font-[600] text-[1.5rem] sm:text-[1.2rem]">
              Feedbacks
            </h1>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex flex-col items-center gap-[1rem]">
            {data.map((item, index) => (
              <div
                key={index}
                className="bg-primaryTwo lg:w-[37rem] w-[100%] p-2 lg:h-[134px] h-[120px] flex justify-center items-center rounded-[5px]"
              >
                <div className="flex flex-col items-start w-full">
                  <div className="flex justify-between w-full items-center">
                    <div className="flex items-center gap-2">
                      <div>{item.avatar}</div>
                      <div>
                        <h1>{item.name}</h1>
                        <img src={item.rating} alt="" />
                      </div>
                    </div>
                    <h1 className="text-[0.8rem] text-[#7F7F7F]">
                      {item.time}
                    </h1>
                  </div>
                  <h1 className="lg:w-[34rem] w-[260px] text-[12px]">
                    {item.text}
                  </h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
