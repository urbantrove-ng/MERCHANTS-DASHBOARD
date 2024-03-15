import React from "react";
import { Chart as ChartJS, defaults, plugins } from "chart.js/auto";
import { Line } from "react-chartjs-2";
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
    <div className="grid gap-[1rem] mt-[10rem] overflow-y-auto max-h-[80vh] justify-center py-[3rem] px-[1rem] font-inter">
      <div className="w-[45rem] rounded-[10px] py-[0.5rem] px-[1rem] bg-gradient-to-r from-[rgba(233,230,206,1)] to-[rgba(151,173,177,1)]">
        <h1 className="font-[600] text-[1.5rem]">Performance Report</h1>
      </div>
      <div className="grid w-[45rem] h-[17rem] bg-white px-[2rem] py-[1rem] rounded-[10px]">
        <Line data={chartData} options={option}/>
      </div>
      <div className="w-[45rem] rounded-[10px] py-[0.5rem] px-[1rem] bg-gradient-to-r from-[rgba(233,230,206,1)] to-[rgba(151,173,177,1)]">
        <h1 className="font-[600] text-[1.5rem]">Report History</h1>
      </div>
      <div>
        <div className="grid justify-center gap-[1rem]">
          {dataText.map((data, index) => {
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
    </div>
  );
}
