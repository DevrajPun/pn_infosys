import React from "react";

function Services() {
  return (
    <>
      <section className="good-tips">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 style={{textAlign: "center", color: "white"}}>
                Our Services
              </h1>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="section-heading" />
              <div className="tips-content">
                <ul>
                  <li>
                    <div className="icon">
                      <i className="fa fa-lightbulb-o" />
                    </div>
                    <div className="right-content">
                      <h4>INNOVATIVE Ideas</h4>
                      <p className="align-justify">
                        PN INFOSYS believes in developing true partnerships. We
                        foster a collegial environment where individual
                        perspectives are respected and honest dialogue is
                        expected.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="fa fa-server" />
                    </div>
                    <div className="right-content">
                      <h4>CREATIVE Designing</h4>
                      <p className="align-justify">
                        PN INFOSYS brings robust skills and forward looking
                        perspectives to solve customer challenges. We use proven
                        knowledge to make recommendations and provide expert
                        guidance to our customers.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="fa fa-users" />
                    </div>
                    <div className="right-content">
                      <h4>CLIENT'S Happiness</h4>
                      <p className="align-justify">
                        PN INFOSYS is driven to meet client needs with
                        determination and grit. We embrace tough challenges and
                        do not rest until the problem is solved, the right way.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="fa fa-tasks" />
                    </div>
                    <div className="right-content">
                      <h4>FULL Maintenance</h4>
                      <p className="text-justify text-align">
                        PN INFOSYS Company provides a full range of maintenance
                        and compliance services for Government and Commercial
                        facilities both large and small.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="fa fa-bullseye" />
                    </div>
                    <div className="right-content">
                      <h4>PRACTICAL Training</h4>
                      <p className="align-justify">
                        We don't use paper and pencil at all in our training
                        sessions.We are provided only practical work at training
                        class session.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="right-image">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/pn-images.appspot.com/o/home-%3Eservices%2Fe-learning.png?alt=media&token=71eaebcc-1041-4891-bb3d-68cc30b0173b"
                  alt
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
