import React from "react";

function Technologies() {
  return (
    <>
      <section className="recent-cases">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="section-heading">
                <h4 style={{fontSize: "xx-large"}}>Technologies</h4>
                <h1 style={{color: "#009df2", fontSize: "xxx-large"}}>
                  We works on..
                </h1>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="portfolio-filters">
                <ul>
                  <li data-filter="*" className="active">
                    Show All
                  </li>
                  <li data-filter=".web_design">Web Designing</li>
                  <li data-filter=".web_dev">Web Development</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="row masonry-layout filters-content normal-col-gap">
                <div className="col-lg-3 masonry-item all web_design">
                  <div className="case-item">
                    <div className="case-thumb">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/pn-images.appspot.com/o/home-%3Ecases%2Fhtml_5.png?alt=media&token=61a7ca43-c857-4fad-9a61-a369753f95a9"
                        alt
                        style={{width: "75%", marginLeft: 39}}
                      />
                    </div>
                    <div className="down-content" style={{height: 118}}>
                      <h4>HTML 5</h4>
                      <span>Markup language for Web pages.</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 masonry-item all web_design">
                  <div className="case-item">
                    <div className="case-thumb">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/pn-images.appspot.com/o/home-%3Ecases%2Fcss_3.png?alt=media&token=55492815-4de7-4fee-9c1e-043549aabac5"
                        alt
                        style={{width: "75%", marginLeft: 39}}
                      />
                    </div>
                    <div className="down-content">
                      <h4>CSS 3</h4>
                      <span>Cascading Style Sheets.</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 masonry-item all web_design">
                  <div className="case-item">
                    <div className="case-thumb">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/pn-images.appspot.com/o/home-%3Ecases%2Fjavascript1.png?alt=media&token=bca923e2-0748-486d-bc2a-a9e7ea571f22"
                        alt
                        style={{width: "75%", marginLeft: 39}}
                      />
                    </div>
                    <div className="down-content" style={{height: 118}}>
                      <h4>Javascript</h4>
                      <span>programming language for websites.</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 masonry-item all web_design">
                  <div className="case-item">
                    <div className="case-thumb">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/pn-images.appspot.com/o/home-%3Ecases%2Fjquery.png?alt=media&token=20b7e294-b475-40dc-842d-991ece5eeb43"
                        alt
                        style={{width: "75%", marginLeft: 39}}
                      />
                    </div>
                    <div className="down-content">
                      <h4>jQuery</h4>
                      <span>jQuery is a JavaScript Library.</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 masonry-item all web_design">
                  <div className="case-item">
                    <div className="case-thumb">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/pn-images.appspot.com/o/home-%3Ecases%2Fbootstrap.png?alt=media&token=2fcc40e5-88f5-4cbe-8280-a96216ac8769"
                        alt
                        style={{width: "75%", marginLeft: 39}}
                      />
                    </div>
                    <div className="down-content">
                      <h4>Bootstrap</h4>
                      <span>CSS framework</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 masonry-item all web_design">
                  <div className="case-item">
                    <div className="case-thumb">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/pn-images.appspot.com/o/home-%3Ecases%2Fwordpress.png?alt=media&token=4466e1d5-e13b-45a3-be77-4f76d984b8c4"
                        alt
                        style={{width: "75%", marginLeft: 39}}
                      />
                    </div>
                    <div className="down-content" style={{height: 118}}>
                      <h4>Wordpress</h4>
                      <span>Content Management System (CMS). </span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 masonry-item all web_dev">
                  <div className="case-item">
                    <div className="case-thumb">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/pn-images.appspot.com/o/home-%3Ecases%2Fphp.png?alt=media&token=701022ac-d1bc-4df6-b0f5-8655f48421fe"
                        alt
                        style={{width: "75%", marginLeft: 39}}
                      />
                    </div>
                    <div className="down-content" style={{height: 118}}>
                      <h4>PHP</h4>
                      <span>PHP is a Server Scripting Language. </span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 masonry-item all web_design">
                  <div className="case-item">
                    <div className="case-thumb">
                      <img
                        src="https://pninfosys.com/assets/frontend/images/technology/angular.png"
                        alt
                        style={{width: "75%", marginLeft: 39}}
                      />
                    </div>
                    <div className="down-content">
                      <h4>Angular</h4>
                      <span>JavaScript framework. </span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 masonry-item all web_dev">
                  <div className="case-item">
                    <div className="case-thumb">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/pn-images.appspot.com/o/home-%3Ecases%2Flaravel.png?alt=media&token=a443045f-69b4-4f8d-be75-729b241e0c76"
                        alt
                        style={{width: "75%", marginLeft: 39}}
                      />
                    </div>
                    <div className="down-content">
                      <h4>Laravel</h4>
                      <span>PHP based web-framework. </span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 masonry-item all web_design">
                  <div className="case-item">
                    <div className="case-thumb">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/pn-images.appspot.com/o/home-%3Ecases%2Fsql.jpg?alt=media&token=120f6bf6-24b2-43d8-a73b-0e8d9a2c1195"
                        alt
                        style={{width: "100%", height: "100%"}}
                      />
                    </div>
                    <div className="down-content">
                      <h4>SQL</h4>
                      <span>Query Language For Database. </span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 masonry-item all web_dev">
                  <div className="case-item">
                    <div className="case-thumb">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/pn-images.appspot.com/o/home-%3Ecases%2Fpython.png?alt=media&token=3778eca2-0dce-4f18-a765-8b954ecc46a0"
                        alt
                        style={{width: "75%", marginLeft: 39}}
                      />
                    </div>
                    <div className="down-content">
                      <h4>Python</h4>
                      <span>Programing Language. </span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 masonry-item all web_dev">
                  <div className="case-item">
                    <div className="case-thumb">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/pn-images.appspot.com/o/home-%3Ecases%2Fdjango.png?alt=media&token=d42f9fd1-24c1-4821-aa63-91bbe6b5f879"
                        alt
                        style={{width: "75%", marginLeft: 39}}
                      />
                    </div>
                    <div className="down-content" style={{height: 118}}>
                      <h4>Django</h4>
                      <span>Open Source Python FrameWork</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Technologies;
