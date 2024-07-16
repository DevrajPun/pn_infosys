import React from "react";

function Portfolio() {
  return (
    <>
      <section className="portfolio-page-second-version">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-4">
              <div className="section-heading">
                <h4 style={{ fontSize: "xx-large" }}>Our</h4>
                <h1 style={{ color: "#009df2", fontSize: "xxx-large" }}>
                  Portfolio
                </h1>
              </div>
            </div>
          </div>
          <div className="row">
            {[
              {
                src: "https://firebasestorage.googleapis.com/v0/b/pn-images.appspot.com/o/home-%3Eportfolio%2Fidtrnew.png?alt=media&token=724ae9b3-fc39-4e1d-9def-8f717da38d66",
                alt: "Institute of Drivers Training and Research",
                title: "Institute of Drivers Training and Research",
                subtitle: "Gwalior",
                link: "http://idtrgwl.com/",
              },
              {
                src: "https://firebasestorage.googleapis.com/v0/b/pn-images.appspot.com/o/home-%3Eportfolio%2Fport2.jpg?alt=media&token=64c3b21f-108d-43c9-948d-26f2d22968e1",
                alt: "Central Institute for Research on Buffaloes",
                title: "C I A R",
                subtitle: "Central Institute for Research on Buffaloes",
                link: "#/none",
              },
              {
                src: "https://firebasestorage.googleapis.com/v0/b/pn-images.appspot.com/o/home-%3Eportfolio%2Fport3.jpg?alt=media&token=97999133-c6a3-46e6-a728-e32c5a92c74a",
                alt: "Rishi Galav Public School",
                title: "Rishi Galav Public School",
                subtitle: "Best School in Gwalior",
                link: "#/none",
              },
              {
                src: "https://firebasestorage.googleapis.com/v0/b/pn-images.appspot.com/o/home-%3Eportfolio%2Fvee.jpg?alt=media&token=66c083af-8a0b-4a18-8d83-3965d9db6743",
                alt: "VEE ACADEMY",
                title: "VEE ACADEMY",
                subtitle: "Gwalior",
                link: "https://vikasedugwl.com/",
              },
              {
                src: "https://firebasestorage.googleapis.com/v0/b/pn-images.appspot.com/o/home-%3Eportfolio%2Fport5.jpg?alt=media&token=41a3ba64-bfaa-4872-9445-e761d44fa94a",
                alt: "Allure Constructions",
                title: "Allure Constructions",
                subtitle: "Allure Constructions Company",
                link: "#/none",
              },
              {
                src: "https://firebasestorage.googleapis.com/v0/b/pn-images.appspot.com/o/home-%3Eportfolio%2FSonagir-logo.png?alt=media&token=5d2c5b91-e7a1-4ae3-a234-6f946dafd08d",
                alt: "Sonagir",
                title: "Sonagir",
                subtitle: "Sonagir Website",
                link: "#/none",
              },
            ].map((item, index) => (
              <div className="col-lg-4 mb-4" key={index}>
                <div className="case-item">
                  <div className="case-thumb">
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="img-fluid"
                      style={{
                        height: "300px",
                        objectFit: "cover",
                        width: "100%",
                      }}
                    />
                    <div className="hover-effect">
                      <div className="hover-content">
                        <a href="#/none">
                          <i className="fa fa-search" />
                        </a>
                        <a href={item.link}>
                          <i className="fa fa-link" />
                        </a>
                        <h3 style={{ color: "white" }}>{item.title}</h3>
                        <h5 style={{ color: "white" }}>{item.subtitle}</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
