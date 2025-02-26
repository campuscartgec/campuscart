import React from "react";
import headerImg from "../assets/img/tech/image4.png";

const Header = () => {
  return (
    <header className="pt-5">
      <div className="container pt-4 pt-xl-5">
        <div className="row pt-5">
          <div className="col-md-8 text-center text-md-start mx-auto">
            <div className="input-group shadow-lg mb-3">
              <input
                className="form-control"
                type="email"
                name="email"
                placeholder="Find a service"
              />
              <button className="btn btn-primary" type="submit">
                Search
              </button>
            </div>
            <div className="text-center">
              <p className="text-danger">This is a protype website!</p>
              <h1 className="display-4 fw-bold mb-5">
                Learn, Earn, and Grow Together!&nbsp;
                <span className="underline"></span>
              </h1>
              <p className="fs-5 text-muted mb-5">
                Our platform aims to empower college students in Kerala by
                providing a dedicated marketplace where they can earn money
                through freelancing and buy/sell educational tools at affordable
                prices. By reducing the financial burden of education and
                fostering skill development, we strive to create a
                self-sustaining student economy that promotes collaborative
                learning, economic independence, and career growth.
              </p>
              <form
                className="d-flex justify-content-center flex-wrap"
                method="post"
                data-bs-theme="light"
              ></form>
            </div>
          </div>
          <div className="col-12 col-lg-10 mx-auto">
            <div className="text-center position-relative">
            <img
                className="img-fluid mx-auto d-block"
                src={headerImg} // Replace with actual image path
                alt="Meeting"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
