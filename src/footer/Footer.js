import React from "react";
import SocialLinks from "./SocialLinks";

function Footer() {
  return (
    <>
      <footer className="footer overflow-hidden pb-60">
        <div className="container pb-10">
          <hr className="mb-10 pb-30 border-white" />
          <div className="row gh-1 gv-2">
            <div className="col-12 col-md mt-md-04">
            <a class="navbar-brand" href="/">
              Zahrizhal Ali
            </a>
            </div>
            <div className="col-12 col-md-4 mt-md-04">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a href="callto:+1 202-358-0309" className="nav-link">
                    github.com/ZahrizhalAli
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="mailto:hello@themebau.com?subject=Test%20Address%20Email"
                    className="nav-link"
                  >
                    zahrizhalali.labfik@umi.ac.id
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-auto mt-md-04">
              <SocialLinks/>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
