import React from "react";

export default function App() {
  return (
    <>

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">

          <a className="navbar-brand fw-bold" href="#">
            RONAK MARVADI
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">

            <ul className="navbar-nav ms-auto">

              <li className="nav-item">
                <a className="nav-link" href="#home">Home</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#portfolio">Portfolio</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#resume">Resume</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>

            </ul>

          </div>
        </div>
      </nav>


      <div
        id="home"
        className="vh-100 d-flex align-items-center text-white"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/premium-photo/generated-illustration-digital-binary-encrypted-code-matrix-background_1088754-14975.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container text-center">

          <h1 className="display-2 fw-bold">
            RONAK MARVADI
          </h1>

          <h3 className="mt-3">
            I'm <span className="text-warning">Front End Developer</span>
          </h3>

        </div>
      </div>


      <div className="container py-5 text-center" id="about">

        <h2 className="fw-bold">About Me</h2>

        <p className="text-muted mt-3 w-75 mx-auto">
          Passionate front-end developer who loves creating clean,
          responsive and modern websites with creative UI designs.
        </p>

        <div className="row justify-content-center mt-5">

          <div className="col-md-8">

            <div className="shadow p-4 rounded bg-light">

              <h3 className="fw-bold mb-3">
                Frontend & React Developer
              </h3>

              <p className="text-muted">
                I enjoy building attractive websites and learning
                new web technologies every day.
              </p>

              <div className="row text-start mt-4">

                <div className="col-md-6">
                  <p><strong>Birthday :</strong> 15 Feb 2007</p>
                  <p><strong>Website :</strong> www.ronak.com</p>
                  <p><strong>Phone :</strong> 1234567890</p>
                </div>

                <div className="col-md-6">
                  <p><strong>City :</strong> Ahmedabad</p>
                  <p><strong>Degree :</strong> BSCIT</p>
                  <p><strong>Email :</strong> ronakmarvadi@gmail.com</p>
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>


      <div className="container py-5">

        <h2 className="fw-bold text-center">Skills</h2>

        <p className="text-muted text-center">
          Technologies and tools I work with
        </p>

        <div className="row mt-5">

          <div className="col-md-6">

            <p className="d-flex justify-content-between">
              <span>HTML</span>
              <span>100%</span>
            </p>

            <div className="progress mb-4">
              <div className="progress-bar" style={{ width: "100%" }}></div>
            </div>

            <p className="d-flex justify-content-between">
              <span>CSS</span>
              <span>95%</span>
            </p>

            <div className="progress mb-4">
              <div className="progress-bar" style={{ width: "95%" }}></div>
            </div>

            <p className="d-flex justify-content-between">
              <span>JavaScript</span>
              <span>65%</span>
            </p>

            <div className="progress mb-4">
              <div className="progress-bar" style={{ width: "65%" }}></div>
            </div>

          </div>


          <div className="col-md-6">

            <p className="d-flex justify-content-between">
              <span>PHP</span>
              <span>70%</span>
            </p>

            <div className="progress mb-4">
              <div className="progress-bar" style={{ width: "70%" }}></div>
            </div>

            <p className="d-flex justify-content-between">
              <span>React</span>
              <span>75%</span>
            </p>

            <div className="progress mb-4">
              <div className="progress-bar" style={{ width: "75%" }}></div>
            </div>

            <p className="d-flex justify-content-between">
              <span>Photoshop</span>
              <span>50%</span>
            </p>

            <div className="progress mb-4">
              <div className="progress-bar" style={{ width: "50%" }}></div>
            </div>

          </div>

        </div>
      </div>


      <div className="container py-5 text-center" id="portfolio">

        <h2 className="fw-bold">Portfolio</h2>

        <p className="text-muted mt-3">
          Some creative projects and designs made by me.
        </p>

        <div className="row g-4 mt-4">

          <div className="col-md-4">
            <img
              src="https://img.freepik.com/premium-photo/still-life-stacked-aesthetic-objects_756748-15760.jpg"
              className="img-fluid rounded shadow"
              alt=""
            />
          </div>

          <div className="col-md-4">
            <img
              src="https://img.freepik.com/premium-photo/still-life-stacked-aesthetic-objects_756748-15773.jpg"
              className="img-fluid rounded shadow"
              alt=""
            />
          </div>

          <div className="col-md-4">
            <img
              src="https://img.freepik.com/premium-photo/collection-different-shapes-colors-including-cone-cone-box_899894-66806.jpg"
              className="img-fluid rounded shadow"
              alt=""
            />
          </div>

        </div>
      </div>



      <div className="container py-5 text-center" id="resume">

        <h2 className="fw-bold">Resume</h2>

        <p className="text-muted mt-3">
          My education and development journey.
        </p>

        <div className="row justify-content-center mt-5">

          <div className="col-md-8">

            <div className="shadow p-4 rounded bg-light text-start">

              <h4 className="fw-bold">
                Front End Developer
              </h4>

              <p className="text-muted">
                Skilled in React, Bootstrap, HTML, CSS and JavaScript.
                Passionate about creating modern responsive websites.
              </p>

              <ul>
                <li>Responsive Web Design</li>
                <li>React JS Projects</li>
                <li>Creative UI Development</li>
              </ul>

            </div>

          </div>

        </div>
      </div>



      <div className=" py-5 text-center" id="contact">

        <h2 className="fw-bold">Contact Me</h2>

        <p className="text-muted mt-3">
          Feel free to contact me anytime.
        </p>

        <div className="row justify-content-center mt-5">

          <div className="col-md-7">

            <div className="shadow p-4 rounded bg-light">

              <form>

                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Your Name"
                />

                <input
                  type="email"
                  className="form-control mb-3"
                  placeholder="Your Email"
                />

                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Subject"
                />

                <textarea
                  className="form-control mb-3"
                  rows="5"
                  placeholder="Message"
                ></textarea>

                <button className="btn btn-dark px-4">
                  Send Message
                </button>

              </form>

            </div>

          </div>

        </div>
      </div>

      <footer className="bg-dark text-white text-center py-3">

        <p className="mb-0">
          © 2026 Ronak Marvadi | Front End Developer
        </p>

      </footer>

    </>
  );
}  
Video Link=https://drive.google.com/drive/folders/1RWOx5VRWBPAEJ4Tou5a4RGGpeYGeRYm7?usp=sharing
