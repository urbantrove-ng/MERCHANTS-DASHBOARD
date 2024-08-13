import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import DisplaySideBar from "../features/RightSideBar/DisplaySideBar";
defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "black";

const data = [
  { label: 2017, target: 31, achieved: 21 },
  { label: 2018, target: 10, achieved: 15 },
  { label: 2019, target: 20, achieved: 40 },
  { label: 2020, target: 25, achieved: 28 },
  { label: 2021, target: 40, achieved: 25 },
  { label: 2022, target: 30, achieved: 25 },
];
const dataText = [
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];
export default function Performance() {
  const chartData = {
    labels: data.map((data) => data.label),
    datasets: [
      {
        label: "Target",
        data: data.map((data) => data.target),
        backgroundColor: "#F8BD8D",
        borderColor: "#F8BD8D",
      },
      {
        label: "Achieved",
        data: data.map((data) => data.achieved),
        backgroundColor: "#465F85",
        borderColor: "#465F85",
      },
    ],
  };
  const option = {
    elements: {
      line: {
        tension: 0.5,
      },
    },
    plugins: {
      title: { 
        text: "Product Deliveries",
      },
    },
  };
  return (
    <div className="relative grid gap-[2rem] lg:w-[812px] w-[330px]  scrollbar-thumb-rounded-full scrollbar-track-rounded-full lg:scrollbar scrollbar-thumb-primaryOne scrollbar-track-primaryTwo  overflow-y-scroll max-h-[75vh] lg:h-[90vh] justify-center lg:py-6  font-inter">
      <div className="fixed top-[10.6rem] sm:top-[9.3rem] right-0 z-10">
        <DisplaySideBar />
      </div>
      <div className=" flex justify-center items-center">
        <div className="lg:w-[761px] h-[60px] w-[300px] rounded-[10px] flex justify-start items-center pl-4 bg-gradient-to-r from-[rgba(233,230,206,1)] to-[rgba(151,173,177,1)]">
          <h1 className="font-[600] text-[1.5rem] sm:text-[1.2rem]">
            Performance Report
          </h1>
        </div>
      </div>
      <div className="lg:w-[761px] w-[300px] lg:h-[20rem] bg-white px-[2rem] py-[1rem] rounded-[10px]">
        <Line data={chartData} options={option} />
      </div>
      <div className=" flex justify-center items-center">
        <div className="lg:w-[761px] h-[60px] w-[300px] rounded-[10px] flex justify-start items-center pl-4 bg-gradient-to-r from-[rgba(233,230,206,1)] to-[rgba(151,173,177,1)]">
          <h1 className="font-[600] text-[1.5rem] sm:text-[1.2rem]">
            Report History
          </h1>
        </div>
      </div>
      <div>
        <div className=" flex flex-col items-center gap-2">
          {dataText.map((data, index) => {
            return (
              <div
                key={index}
                className="bg-primaryTwo  lg:w-[37rem] w-[300px] lg:h-[100px] h-[80px]  flex justify-center items-center  rounded-[5px]"
              >
                <p className=" lg:w-[35rem] w-[280px] text-[12px] lg:text-[16px]">{data.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
