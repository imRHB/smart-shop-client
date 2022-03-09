import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import styles from "./Charts.module.css";

const Charts = () => {
  const [pieChart, setPieChart] = useState({
    series: [760300, 944079, 604079],
    options: {
      chart: {
        width: 380,
        type: "pie",
      },

      labels: ["Sales", "Purchase", "Profit"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  });

  const [charts, setCharts] = useState({
    series: [
      {
        name: "BUY",
        type: "column",
        data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
      },
      {
        name: "SALES",
        type: "area",
        data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
      },
      {
        name: "PROFIT",
        type: "line",
        data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
        stacked: false,
      },
      stroke: {
        width: [0, 2, 3],
        curve: "smooth",
      },
      plotOptions: {
        bar: {
          columnWidth: "10%",
        },
      },

      fill: {
        opacity: [0.85, 0.25, 1],
        gradient: {
          inverseColors: false,
          shade: "light",
          type: "vertical",
          opacityFrom: 0.85,
          opacityTo: 0.55,
          stops: [0, 100, 100, 100],
        },
      },
      labels: [
        "01/01/2021",
        "02/01/2021",
        "03/01/2021",
        "04/01/2021",
        "05/01/2021",
        "06/01/2021",
        "07/01/2021",
        "08/01/2021",
        "09/01/2021",
        "10/01/2021",
        "11/01/2021",
      ],
      markers: {
        size: 0,
      },
      xaxis: {
        type: "datetime",
      },
      yaxis: {
        title: {
          text: "Points",
        },
        min: 0,
      },
      tooltip: {
        shared: true,
        intersect: false,
        y: {
          formatter: function (y) {
            if (typeof y !== "undefined") {
              return y.toFixed(0) + " points";
            }
            return y;
          },
        },
      },
    },
  });

  return (
    <div className="">
      <div>
        <div className="row ">
          <div className="col-12 col-lg-7">
            <div style={{ backgroundColor: "white" }} className="mt-4 p-2">
              <h5 className="pt-3 px-2">Monthly Sales, Buy, Profit</h5>
              <small className="text-secondary ms-2 ">
                (+43%) than last year
              </small>
              <ReactApexChart
                options={charts.options}
                series={charts.series}
                type="line"
                height={350}
              />
            </div>
          </div>

          <div className="col-12 col-lg-5">
            <div
              style={{
                width: "100%",
                backgroundColor: "white",
                height: "455px",
              }}
              className="mt-4"
            >
              <h5 className="pt-3 ps-3">Todays Report</h5>
              <div
                className="mt-4 "
                style={{ backgroundColor: "white" }}
                id="chart"
              >
                <ReactApexChart
                  options={pieChart.options}
                  series={pieChart.series}
                  type="pie"
                  width={350}
                />
              </div>

              <div className="px-4 mt-3">
                <table
                  className={`${styles.tableStyle}`}
                  style={{ width: "100%" }}
                >
                  <tr>
                    <th className={`${styles.tableStyle}`}>Todays Report</th>
                    <th className={`${styles.tableStyle}`}>Amount</th>
                  </tr>
                  <tr>
                    <th className={`${styles.tableStyle}`}>Total Sales</th>
                    <td className={`${styles.tableStyle} `}>$ 7260300</td>
                  </tr>
                  <tr>
                    <th className={`${styles.tableStyle}`}>Total Purchase</th>
                    <td className={`${styles.tableStyle}`}>$ 99004079</td>
                  </tr>
                  <tr>
                    <th className={`${styles.tableStyle}`}>Total Profit</th>
                    <td className={`${styles.tableStyle}`}>$ 904079</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Charts;
