import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <section className="footer-content">
        <div className="main-footer">
          <div className="container">
            <div className="row">
              <div className="col-md-4 text-center">
                <div className="footer-heading">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/pn-images.appspot.com/o/logo%2Fcolorlogo.png?alt=media&token=0386f0aa-e1e1-4950-924f-3eedaa82d967"
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <p className="about-oxana" style={{ textAlign: "justify" }}>
                  PN INFOSYS is a leading global business consulting and IT
                  service company. We provides a full range of maintenance and
                  compliance services for Government and Commercial facilities
                  both large and small. Whether you need to run your business
                  more efficiently or accelerate revenue growth, PN INFOSYS can
                  get you there.
                </p>
                <ul className="social-icons">
                  <li>
                    <Link to="https://www.facebook.com/pninfosys/">
                      <i className="fa fa-facebook" />
                    </Link>
                  </li>
                  <li>
                    <Link to="https://www.linkedin.com/company/pninfosys/">
                      <i className="fa fa-linkedin" />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-4 ">
                <div className="footer-heading text-center mr-3">
                  <h4>Get In Touch!</h4>
                </div>
                <ul className="more-info text-center">
                  <li>
                    <a href="#">www.pninfosys.com</a>
                    <br />
                    <a href>support@pninfosys.com</a>
                  </li>
                  <li>
                    <a> +91 7000846823 </a>
                    <br />
                    <a> +91 7415289378</a>
                  </li>
                  <li>
                    <a>
                      MIG-332
                      <br /> Darpan Colony,Thatipur,
                      <br /> Gwalior,Madhya Pradesh
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <div className="footer-heading text-center">
                  <h4 id="title">COMPANIES WORKSHOP</h4>
                </div>
                <ul className="list-unstyled text-center text-white">
                  <li>
                    <Link to="#" className="text-white">
                      Xiaomi MI Company
                    </Link>
                    <br /> August 20 / Mr. Vaibhav Shrivastava
                  </li>
                  <br />
                  <li>
                    <Link to="#" className="text-white">
                      Bentchair Company
                    </Link>
                    <br /> October 06 / Mr. Nicket Bansal
                  </li>
                  <br />
                  <li>
                    <Link to="#" className="text-white">
                      MPCT College Gwalior
                    </Link>
                    <br /> November 02 / PN Infosys Team
                  </li>
                  <br />
                  <li>
                    <Link to="#" className="text-white">
                      RJIT College Tekanpur
                    </Link>
                    <br /> February 24 / PN Infosys Team
                  </li>
                </ul>
              </div>
              <div className="col-md-12">
                <div className="sub-footer">
                  <p>
                    Copyright © 2024-2025
                    <Link to="#"> | PN INFOSYS IT COMPANY IN GWALIOR ! </Link>.
                    All rights reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
