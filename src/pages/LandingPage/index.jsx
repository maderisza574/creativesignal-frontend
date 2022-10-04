import "./index.css";

// import stanlee from "../../assets/img/stanlee.png";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Banner from "../../assets/img/banner.png";
// import Findicon from "../../assets/img/findicon.png";

function Landing() {
  return (
    <>
      {/* START HEADER */}
      <Header />
      {/* END HEADER */}

      {/* START MAIN */}
      <main>
        <div className="card mb-5 rounded-0 ">
          <img src={Banner} alt="banner" className="card-img" />
          <div className="card-img-overlay d-flex flex-column justify-content-center">
            <div className="container-fluid ">
              <div className="row">
                <div className="col-6">
                  <h1 className="card-title text-white">
                    Find event you
                    <br /> love with our
                  </h1>

                  <div className="card mt-5">
                    <div className="input-group py-2 px-2">
                      <input
                        type="text"
                        placeholder="Search event"
                        className="form-control border-0"
                      />
                      <input
                        type="text"
                        placeholder="Where"
                        className="form-control border-top-0 border-bottom-0"
                      />
                      <div className="btn btn-primary">&#10140;</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end banner */}
          <div className="buton container">
            <div className="butdate container col text-center">
              <div className="btn-group me-2">
                <button type="button" className="btn btn-outline-warning">
                  <p>13</p>Mon
                </button>
                <div className="btn-group me-2">
                  <button type="button" className="btn btn-outline-warning">
                    <p>13</p>Mon
                  </button>
                </div>
                <div className="btn-group me-2">
                  <button type="button" className="btn btn-outline-warning">
                    <p>13</p>Mon
                  </button>
                </div>
                <div className="btn-group me-2">
                  <button type="button" className="btn btn-outline-warning">
                    <p>13</p>Mon
                  </button>
                </div>
                <div className="btn-group me-2">
                  <button type="button" className="btn btn-outline-warning">
                    <p>13</p>Mon
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* button */}
        <div className="col-3 rounded-pill bg-pink p-1 text-center mx-auto">
          <snap className="text-pink letter-spacing fw-bold">
            &#8212; EVENT
          </snap>
        </div>
        {/* <article className="article__event">
          <div className="article__image">
            <img src={stanlee} alt="stanlee" className="article__image--size" />
          </div>
          <div className="article__caption">
            <h2 className="article__caption--header">Its me Stanlee</h2>
            <p className="article__caption--desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni
              similique laudantium qui esse debitis minus mollitia magnam, ullam
              sed delectus veritatis. Nemo officia libero laboriosam saepe
              impedit tenetur quod doloremque?
            </p>
          </div>
        </article> */}
      </main>
      {/* END MAIN */}

      {/* START FOOTER */}
      <Footer />
      {/* END FOOTER */}
    </>
  );
}

export default Landing;
