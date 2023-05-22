import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import AppTheme from "../Colors";

const MainBody = () => {
  const theme = useContext(ThemeContext)[0];
  const currTheme = AppTheme[theme];

  return (
    <>
      <header
        style={{
            backgroundColor: `${currTheme.backgroundColor}`,
            color: `${currTheme.textColor}`,
          }}

       className="pd-bottom" >
        <div className="container px-5 pb-5">
          <div className="row gx-5 align-items-center">
            <div className="col-xxl-5">
              <div className="text-center text-xxl-start">
                <div className="badge bg-gradient-primary-to-secondary text-white mb-4">
                  <div className="text-uppercase text-label">
                  &middot; Tech Enthusiatic &middot; Innovator &middot; Developer
                  </div>
                </div>
                <div className="fs-3 fw-light text-muted">
                  I can help your business to
                </div>
                <h1 className="display-3 fw-bolder mb-5">
                  <span className="text-gradient d-inline">
                    Get online and grow fast
                  </span>
                </h1>
                <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xxl-start mb-3">
                  <a
                    className="btn btn-primary btn-lg px-5 py-3 me-sm-3 fs-6 fw-bolder"
                    href="resume.html"
                  >
                    Resume
                  </a>

                  <a
                    style={{backgroundColor: `${currTheme.btnBgColor}`, color: `${currTheme.btnTextColor}` }}
                    className="btn btn-outline-dark btn-lg px-5 py-3 fs-6 fw-bolder"
                    href="projects.html"
                  >
                    Projects
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xxl-7"></div>
          </div>
        </div>
      </header>
    </>
  );
};

export default MainBody;
