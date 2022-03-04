import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import "./OrderTimeline.css";
const OrderTimeline = () => {
  return (
    <div>
      <div className="row">
        <div className="col-12 col-lg-6 col-md-6">
          <div
            style={{ backgroundColor: "white", height: "355px" }}
            className=""
          >
            <h6 className="text-start fw-bold p-3">Traffic By Site</h6>
            <div className="row">
              <div className="col-12 col-lg-6 col-md-6">
                <div className="border rounded ms-3 p-2">
                  <FacebookIcon style={{ color: "blue" }} />
                  <h5 className="fw-bold mt-3">75.44k</h5>
                  <small className="text-secondary">Facebook</small>
                </div>
              </div>
              <div className="col-12 col-lg-6 col-md-6">
                <div className="border rounded me-3 p-2">
                  <GoogleIcon style={{ color: "red" }} />
                  <h5 className="fw-bold mt-3">75.44k</h5>
                  <small className="text-secondary">Google</small>
                </div>
              </div>
              <div className="col-12 col-lg-6 col-md-6">
                <div className="border rounded mt-3 ms-3 p-2">
                  <InstagramIcon style={{ color: "darkblue" }} />
                  <h5 className="fw-bold mt-3">75.44k</h5>
                  <small className="text-secondary">Instagram</small>
                </div>
              </div>
              <div className="col-12 col-lg-6 col-md-6">
                <div className="border rounded mt-3 me-3 p-2">
                  <TwitterIcon style={{ color: "skyblue" }} />
                  <h5 className="fw-bold mt-3">75.44k</h5>
                  <small className="text-secondary">Twitter</small>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6 col-md-6">
          <div style={{ backgroundColor: "white" }} className="px-5 pt-3 pb-4">
            <h6 className="text-start fw-bold p-2">Order Timeline</h6>
            <div>
              <div className="d-flex mt-2">
                <FiberManualRecordIcon
                  style={{ color: "red" }}
                ></FiberManualRecordIcon>
                <small>1983, orders, $4220</small>
              </div>
              <div className="text-start ">
                <small className="line"></small>
                <small
                  style={{ fontSize: "11px", color: "gray" }}
                  className="ms-4"
                >
                  {" "}
                  31 May 2021 19:34
                </small>
              </div>
            </div>
            <div>
              <div className="d-flex mt-2">
                <FiberManualRecordIcon
                  style={{ color: "green" }}
                ></FiberManualRecordIcon>
                <small>1983, orders, $4220</small>
              </div>
              <div className="text-start">
                <small className="line"></small>
                <small
                  style={{ fontSize: "11px", color: "gray" }}
                  className="ms-4"
                >
                  {" "}
                  31 May 2021 19:34
                </small>
              </div>
            </div>
            <div>
              <div className="d-flex mt-2">
                <FiberManualRecordIcon
                  style={{ color: "blue" }}
                ></FiberManualRecordIcon>
                <small>1983, orders, $4220</small>
              </div>
              <div className="text-start">
                <small className="line"></small>
                <small
                  style={{ fontSize: "11px", color: "gray" }}
                  className="ms-4"
                >
                  {" "}
                  31 May 2021 19:34
                </small>
              </div>
            </div>
            <div>
              <div className="d-flex mt-2">
                <FiberManualRecordIcon
                  style={{ color: "yellow" }}
                ></FiberManualRecordIcon>
                <small>1983, orders, $4220</small>
              </div>
              <div className="text-start ">
                <small className="line"></small>
                <small
                  style={{ fontSize: "11px", color: "gray" }}
                  className="ms-4"
                >
                  {" "}
                  31 May 2021 19:34
                </small>
              </div>
            </div>
            <div>
              <div className="d-flex mt-2">
                <FiberManualRecordIcon
                  style={{ color: "skyblue" }}
                ></FiberManualRecordIcon>
                <small>1983, orders, $4220</small>
              </div>
              <div className="text-start">
                <small
                  style={{ fontSize: "11px" }}
                  className="ms-4 text-secondary"
                >
                  {" "}
                  31 May 2021 19:34
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderTimeline;
