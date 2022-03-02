import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
  PieChart,
  Pie,
  Sector,
  Cell,
} from "recharts";
import HeaderTwo from "../UIHome/HeaderTwo/HeaderTwo";
import TotalReports from "../UIHome/TotalReports/TotalReports";
import styles from "./Dashboard.module.css";

const monthlyData = [
  {
    id: 1,
    date: "Mar 21",
    salesOrder: 1700,
    salesAmount: 2356,
  },
  {
    id: 2,
    date: "Apr 21",
    salesOrder: 2490,
    salesAmount: 7525,
  },
  {
    id: 3,
    date: "May 21",
    salesOrder: 2600,
    salesAmount: 6792,
  },
  {
    id: 4,
    date: "Jun 21",
    salesOrder: 530,
    salesAmount: 1020,
  },
  {
    id: 5,
    date: "Jul 21",
    salesOrder: 300,
    salesAmount: 1540,
  },
  {
    id: 6,
    date: "Aug 21",
    salesOrder: 5300,
    salesAmount: 8350,
  },
  {
    id: 7,
    date: "Sep 21",
    salesOrder: 5800,
    salesAmount: 6792,
  },
  {
    id: 8,
    date: "Oct 21",
    salesOrder: 260,
    salesAmount: 1130,
  },
  {
    id: 9,
    date: "Nov 21",
    salesOrder: 4000,
    salesAmount: 6072,
  },
  {
    id: 10,
    date: "Dec 21",
    salesOrder: 1400,
    salesAmount: 2533,
  },
  {
    id: 11,
    date: "Jan 22",
    salesOrder: 2100,
    salesAmount: 4668,
  },
  {
    id: 12,
    date: "Feb 22",
    salesOrder: 800,
    salesAmount: 5600,
  },
];

const salesWithPurchase = [
  { name: "Sales", value: 7260300 },
  { name: "Purchase", value: 99004079 },
];

const Dashboard = () => {
  return (
    <>
      <HeaderTwo />
      <div className="container px-4 mt-5">
        <div className="row gx-5">
          <div className="col-12 col-md-8 col-lg-8 col-sm-12">
            <div className="p-3 border bg-light">
              <h5>Monthly Sales Amount & Order</h5>
              <hr />
              <div>
                <ResponsiveContainer width="100%" aspect={2}>
                  <BarChart
                    data={monthlyData}
                    width={800}
                    height={300}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" interval={0} width="200" />
                    <YAxis />
                    <Tooltip />
                    <Legend verticalAlign="top" height={36} />
                    <Bar dataKey="salesOrder" fill="#8884D8" barSize={25} />
                    <Bar dataKey="salesAmount" fill="#82CDFF" barSize={25} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 col-lg-4 col-sm-12">
            <div className="p-3 border bg-light">
              <h5>Todays Report</h5>
              <hr />
              <div>
                <table
                  className={`${styles.tableStyle}`}
                  style={{ width: "100%" }}
                >
                  <tbody>
                    <tr>
                      <th className={`${styles.tableStyle}`}>Todays Report</th>
                      <th className={`${styles.tableStyle}`}>Amount</th>
                    </tr>
                    <tr>
                      <th className={`${styles.tableStyle}`}>Total Sales</th>
                      <td className={`${styles.tableStyle}`}>$ 7260300</td>
                    </tr>
                    <tr>
                      <th className={`${styles.tableStyle}`}>Total Purchase</th>
                      <td className={`${styles.tableStyle}`}>$ 99004079</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart width="100%" height={250}>
                    <Pie
                      data={salesWithPurchase}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={50}
                      fill="#8884d8"
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container px-4 mt-3">
        <TotalReports />
      </div>
    </>
  );
};

export default Dashboard;
