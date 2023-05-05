import React from "react";

function Header() {
  return (
    <>
      <header class="navbar navbar-top navbar-expand-lg navbar-fixed">
        <div class="container justify-content-between">
          <a class="navbar-brand" href="index-2.html">
            <a class="navbar-brand" href="/">
              Zahrizhal Ali
            </a>
          </a>
          <a
            class="navbar-toggle"
            href="#navbar-mobile-style-2"
            data-fancybox
            data-base-class="fancybox-navbar"
            data-keyboard="false"
            data-auto-focus="false"
            data-touch="false"
            data-close-existing="true"
            data-small-btn="false"
            data-toolbar="false"
          >
            <span></span>
            <span></span>
            <span></span>
          </a>
          <ul class="nav navbar-nav">
            <li class="nav-item navbar-dropdown navbar-dropdown-mega active">
              <a href="home.html" class="nav-link">
                <span class="nav-link-name">home</span>
                <svg
                  width="6"
                  height="10"
                  viewBox="0 0 6 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 9L5 5L1 1"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
            </li>
            <li class="nav-item navbar-dropdown">
              <a href="portfolio-col-1-style-1.html" class="nav-link">
                <span class="nav-link-name">projects</span>
                <svg
                  width="6"
                  height="10"
                  viewBox="0 0 6 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 9L5 5L1 1"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
            </li>

            <li class="nav-item navbar-dropdown">
              <a href="/about" class="nav-link">
                <span class="nav-link-name">About Me</span>
                <svg
                  width="6"
                  height="10"
                  viewBox="0 0 6 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 9L5 5L1 1"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
            </li>
          </ul>
          <ul class="nav nav-gap-sm navbar-nav nav-social align-items-center">
            <li class="nav-item">
              <a href="https://instagram.com/runwebrun" class="nav-link">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.2827 5.3166C8.24087 5.3166 5.78732 7.8148 5.78732 10.912C5.78732 14.0092 8.24087 16.5074 11.2827 16.5074C14.3245 16.5074 16.7781 14.0092 16.7781 10.912C16.7781 7.8148 14.3245 5.3166 11.2827 5.3166ZM11.2827 14.5497C9.31698 14.5497 7.70998 12.9183 7.70998 10.912C7.70998 8.90563 9.3122 7.27425 11.2827 7.27425C13.2532 7.27425 14.8554 8.90563 14.8554 10.912C14.8554 12.9183 13.2484 14.5497 11.2827 14.5497ZM18.2846 5.08772C18.2846 5.81331 17.7107 6.39282 17.0029 6.39282C16.2902 6.39282 15.7211 5.80844 15.7211 5.08772C15.7211 4.36699 16.295 3.78261 17.0029 3.78261C17.7107 3.78261 18.2846 4.36699 18.2846 5.08772ZM21.9243 6.4123C21.843 4.66404 21.4508 3.11545 20.1929 1.83956C18.9399 0.563678 17.419 0.164355 15.7019 0.0766992C13.9323 -0.0255664 8.62827 -0.0255664 6.85865 0.0766992C5.14643 0.159486 3.62552 0.558809 2.36766 1.83469C1.10979 3.11058 0.722392 4.65917 0.636302 6.40743C0.535865 8.20925 0.535865 13.6098 0.636302 15.4117C0.717609 17.1599 1.10979 18.7085 2.36766 19.9844C3.62552 21.2603 5.14165 21.6596 6.85865 21.7473C8.62827 21.8495 13.9323 21.8495 15.7019 21.7473C17.419 21.6645 18.9399 21.2652 20.1929 19.9844C21.446 18.7085 21.8382 17.1599 21.9243 15.4117C22.0247 13.6098 22.0247 8.21412 21.9243 6.4123ZM19.6381 17.345C19.2651 18.2995 18.5429 19.0348 17.6007 19.4195C16.1898 19.9893 12.8419 19.8578 11.2827 19.8578C9.72352 19.8578 6.37081 19.9844 4.96469 19.4195C4.02727 19.0397 3.30507 18.3043 2.92724 17.345C2.36766 15.9084 2.49679 12.4995 2.49679 10.912C2.49679 9.32443 2.37244 5.91071 2.92724 4.47899C3.30029 3.52451 4.02248 2.78917 4.96469 2.40446C6.37559 1.83469 9.72352 1.96618 11.2827 1.96618C12.8419 1.96618 16.1946 1.83956 17.6007 2.40446C18.5381 2.7843 19.2603 3.51964 19.6381 4.47899C20.1977 5.91558 20.0686 9.32443 20.0686 10.912C20.0686 12.4995 20.1977 15.9133 19.6381 17.345Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </header>
      <div
        class="navbar navbar-mobile navbar-mobile-style-2"
        id="navbar-mobile-style-2"
      >
        <div class="shape justify-content-end">
          <svg
            data-rellax-speed="0"
            width="544"
            height="362"
            viewBox="0 0 544 362"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="320.5" cy="41.5" r="320.5" fill="#ececec" />
          </svg>
        </div>
        <div class="navbar-head">
          <div class="container justify-content-between">
            <a class="navbar-brand" href="index-2.html">
              Zahrizhal Ali
            </a>
            <a class="navbar-toggle" data-fancybox-close>
              <span></span>
              <span></span>
              <span></span>
            </a>
          </div>
        </div>
        <div class="container">
          <div class="row gh-1 justify-content-center">
            <div class="col-12 col-md-7 col-lg-5 col-xl-4">
              <div class="navbar-body">
                <ul class="nav navbar-nav navbar-nav-collapse">
                  <li class="nav-item navbar-collapse active">
                    <a
                      href="#navbarCollapseHome"
                      class="nav-link collapsed"
                      role="button"
                      data-bs-toggle="collapse"
                      aria-expanded="false"
                      aria-controls="navbarCollapseHome"
                    >
                      <span class="nav-link-name">home</span>
                      <svg
                        class="collapse-icon"
                        width="7"
                        height="12"
                        viewBox="0 0 7 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 11L6 6L1 1"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </a>
                  </li>
                  <li class="nav-item navbar-collapse">
                    <a
                      href="#navbarCollapseProjects"
                      class="nav-link collapsed"
                      role="button"
                      data-bs-toggle="collapse"
                      aria-expanded="false"
                      aria-controls="navbarCollapseProjects"
                    >
                      <span class="nav-link-name">projects</span>
                      <svg
                        class="collapse-icon"
                        width="7"
                        height="12"
                        viewBox="0 0 7 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 11L6 6L1 1"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </a>
                  </li>

                  <li class="nav-item navbar-collapse">
                    <a
                      href="#navbarCollapseContact"
                      class="nav-link collapsed"
                      role="button"
                      data-bs-toggle="collapse"
                      aria-expanded="false"
                      aria-controls="navbarCollapseContact"
                    >
                      <span class="nav-link-name">About Me</span>
                      <svg
                        class="collapse-icon"
                        width="7"
                        height="12"
                        viewBox="0 0 7 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 11L6 6L1 1"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-1 d-none d-md-block"></div>
            <div class="col-12 col-md-4 col-lg-4 col-xl-3">
              <div class="navbar-footer">
                <div class="mb-60">
                  <p class="lead mb-17 fw-medium">Contact info:</p>
                  <ul class="list-group borderless font-size-17">
                    <li class="list-group-item">
                      Email:{" "}
                      <a
                        href="mailto:hello@themebau.com?subject=Test%20Address%20Email"
                        class="text-decoration-none"
                      >
                        zahrizhalali.labfik@umi.ac.id
                      </a>
                    </li>
                    <li class="list-group-item">
                      GitHub:{" "}
                      <a
                        href="callto:+1 202-358-0309"
                        class="text-decoration-none"
                      >
                        github.com/ZahrizhalAli
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="mb-60">
                  <p class="lead mb-17 fw-medium">Address:</p>
                  <ul class="list-group borderless font-size-17">
                    <li class="list-group-item">Bandung, Indonesia</li>
                  </ul>
                </div>
                <ul class="nav nav-gap-sm navbar-nav nav-social align-items-center mt-n10">
                  <li class="nav-item">
                    <a href="https://instagram.com/zahriz.ali" class="nav-link">
                      <svg
                        width="18"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.2827 5.3166C8.24087 5.3166 5.78732 7.8148 5.78732 10.912C5.78732 14.0092 8.24087 16.5074 11.2827 16.5074C14.3245 16.5074 16.7781 14.0092 16.7781 10.912C16.7781 7.8148 14.3245 5.3166 11.2827 5.3166ZM11.2827 14.5497C9.31698 14.5497 7.70998 12.9183 7.70998 10.912C7.70998 8.90563 9.3122 7.27425 11.2827 7.27425C13.2532 7.27425 14.8554 8.90563 14.8554 10.912C14.8554 12.9183 13.2484 14.5497 11.2827 14.5497ZM18.2846 5.08772C18.2846 5.81331 17.7107 6.39282 17.0029 6.39282C16.2902 6.39282 15.7211 5.80844 15.7211 5.08772C15.7211 4.36699 16.295 3.78261 17.0029 3.78261C17.7107 3.78261 18.2846 4.36699 18.2846 5.08772ZM21.9243 6.4123C21.843 4.66404 21.4508 3.11545 20.1929 1.83956C18.9399 0.563678 17.419 0.164355 15.7019 0.0766992C13.9323 -0.0255664 8.62827 -0.0255664 6.85865 0.0766992C5.14643 0.159486 3.62552 0.558809 2.36766 1.83469C1.10979 3.11058 0.722392 4.65917 0.636302 6.40743C0.535865 8.20925 0.535865 13.6098 0.636302 15.4117C0.717609 17.1599 1.10979 18.7085 2.36766 19.9844C3.62552 21.2603 5.14165 21.6596 6.85865 21.7473C8.62827 21.8495 13.9323 21.8495 15.7019 21.7473C17.419 21.6645 18.9399 21.2652 20.1929 19.9844C21.446 18.7085 21.8382 17.1599 21.9243 15.4117C22.0247 13.6098 22.0247 8.21412 21.9243 6.4123ZM19.6381 17.345C19.2651 18.2995 18.5429 19.0348 17.6007 19.4195C16.1898 19.9893 12.8419 19.8578 11.2827 19.8578C9.72352 19.8578 6.37081 19.9844 4.96469 19.4195C4.02727 19.0397 3.30507 18.3043 2.92724 17.345C2.36766 15.9084 2.49679 12.4995 2.49679 10.912C2.49679 9.32443 2.37244 5.91071 2.92724 4.47899C3.30029 3.52451 4.02248 2.78917 4.96469 2.40446C6.37559 1.83469 9.72352 1.96618 11.2827 1.96618C12.8419 1.96618 16.1946 1.83956 17.6007 2.40446C18.5381 2.7843 19.2603 3.51964 19.6381 4.47899C20.1977 5.91558 20.0686 9.32443 20.0686 10.912C20.0686 12.4995 20.1977 15.9133 19.6381 17.345Z"
                          fill="currentColor"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
