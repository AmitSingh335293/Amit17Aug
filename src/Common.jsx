import React from "react";
import { NavLink } from "react-router-dom";
// import Svg from "./ram.svg";

const Common = (props) => {
  return (
    <>
      <section id="header" className="d-flex align-items-center ">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row lolbap">
                <div className="col-md-6 pt-5 pt-lg-0 d-flex justify-content-center flex-column lol">
                  <h1>
                    {props.name}
                    <strong className="brand-name"> AMIT SINGH</strong>
                  </h1>
                  <h2 className="my-3">
                    We are the team of talented developer making website
                  </h2>
                  <div className="mt-3 ">
                    <NavLink to={props.visit} className="btn-get-started">
                      {props.btn}
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-6  header-img lol1">
                  <img
                    src={props.imgsrc}
                    className="img-fluid animated"
                    alt="JAI HIND"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Common;
