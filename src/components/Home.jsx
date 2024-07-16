import React from "react";

function Home() {
  return (
    <>
      {/* section one */}
      <div
        className="main-content"
        style={{
          background:
            "url('https://pninfosys.com/assets/frontend/images/banner.png')",
        }}
      >
        <div className="parallax-banner">
          <div className="inner-header">
            <div className="inner-content">
              <h4 style={{ textShadow: "0px 0px 5px #000000" }}>
                what are you waiting for?
              </h4>
              <h1 style={{ textShadow: "0px 0px 5px #000000" }}>
                Our PN Infosys
                <br /> We're ready to help you grow!.
              </h1>
              <div className="main-decoration">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/pn-images.appspot.com/o/home-%3Ebanner%2Fbanner2.png?alt=media&token=ca3ffc74-514c-4d79-9af4-c025e88b89aa"
                  alt
                  style={{ width: "50%" }}
                />
              </div>
            </div>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 24 150 28"
              preserveAspectRatio="none"
              shapeRendering="auto"
              className="waves"
            >
              <defs>
                <path
                  id="gentle-wave"
                  d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                />
              </defs>
              <g className="parallax">
                <use
                  xlinkHref="#gentle-wave"
                  x={48}
                  y={0}
                  fill="rgba(255,255,255,0.7"
                />
                <use
                  xlinkHref="#gentle-wave"
                  x={48}
                  y={3}
                  fill="rgba(255,255,255,0.5)"
                />
                <use
                  xlinkHref="#gentle-wave"
                  x={48}
                  y={5}
                  fill="rgba(255,255,255,0.3)"
                />
                <use xlinkHref="#gentle-wave" x={48} y={7} fill="#fff" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      {/* section two */}
      <section className="features" style={{ marginTop: 45 }}>
        <h4 className="lead text-center">
          PN INFOSYS is a leading global business consulting and IT service
          company,
          <br />
          Whether you need to run your business more efficiently or accelerate
          revenue growth, PN INFOSYS can get you there.
        </h4>
        <div className="container-fluid" style={{ width: "95%" }}>
          <div className="row">
            <div className="col-lg-3">
              <div className="feature-item">
                <div className="icon">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/pn-images.appspot.com/o/home-%3Efeature%2Fcollaborative1.jpg?alt=media&token=b8ce06a7-a1c9-41e7-a4ed-3e65be127f11"
                    alt
                  />
                </div>
                <h4>
                  Collaborative
                  <br /> Spirit
                </h4>
                <p>
                  We believe in developing true partnerships and making clients
                  happy.
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="feature-item">
                <div className="icon">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/pn-images.appspot.com/o/home-%3Efeature%2Fthinking.png?alt=media&token=a4d7e55a-cc39-443b-bcbc-92921ae35f6a"
                    alt
                  />
                </div>
                <h4>
                  Expert
                  <br /> Thinking
                </h4>
                <p>
                  We brings robust skill and forward looking perspectives to
                  solve customer challenges.
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="feature-item">
                <div className="icon">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/pn-images.appspot.com/o/home-%3Efeature%2Fdedication.jpg?alt=media&token=2b6177d8-816a-45d8-acec-ca235232235e"
                    alt
                  />
                </div>
                <h4>Exorbitant Dedication</h4>
                <p>
                  PN Infosys is driven to meet client needs with determination
                  and grit. We embrace tough challenges.
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="feature-item">
                <div className="icon">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/pn-images.appspot.com/o/home-%3Efeature%2Ftraining.png?alt=media&token=9f731de1-607f-4ce5-999b-3b5b940a78ae"
                    alt
                  />
                </div>
                <h4>
                  Industrial <br />
                  Training
                </h4>
                <p>
                  We provide free Industrial Internship to novice
                  undergratuates. Basically our aim is to help students.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section three */}
      <section className="good-tips">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="section-heading">
                <h2>
                  Learning environment,Free Internship to novice students.
                </h2>
              </div>
              <div className="tips-content">
                <ul>
                  <li>
                    <div className="icon">
                      <i
                        className="fa fa-laptop"
                        style={{ fontSize: 47, color: "red" }}
                      />
                    </div>
                    <div className="right-content">
                      <h4>WEB DESIGNING</h4>
                      <p>
                        Something which makes PN INFOSYS different from other IT
                        companies is that we train novice students and also make
                        them work on Live projects.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i
                        className="fa fa-laptop"
                        style={{ fontSize: 47, color: "red" }}
                      />
                    </div>
                    <div className="right-content">
                      <h4>WEB DEVELOPMENT</h4>
                      <p>
                        Something which makes PN INFOSYS different from other IT
                        companies is that we train novice students and also make
                        them work on Live projects.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i
                        className="fa fa-mobile"
                        style={{ fontSize: 47, color: "red" }}
                      />
                    </div>
                    <div className="right-content">
                      <h4>APP DEVELOPMENT</h4>
                      <p>
                        Something which makes PN INFOSYS different from other IT
                        companies is that we train novice students and also make
                        them work on Live projects.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i
                        className="fa fa-laptop"
                        style={{ fontSize: 47, color: "red" }}
                      />
                    </div>
                    <div className="right-content">
                      <h4>ANGULAR, PYTHON, DJANGO, LARAVEL</h4>
                      <p>
                        Something which makes PN INFOSYS different from other IT
                        companies is that we train novice students and also make
                        them work on Live projects.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="right-image">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/pn-images.appspot.com/o/home-%3Etips%2Flearning.png?alt=media&token=ce9f919b-595f-44e0-bbbd-aa72aba5b8f6"
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

export default Home;
