import React from "react";
import SocialLinks from "../footer/SocialLinks";

function Header() {
  return (
    <>
      <header class="navbar navbar-top navbar-expand-lg navbar-fixed">
        <div class="container justify-content-between">
            <a class="navbar-brand" href="/">
              Zahrizhal Ali
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
              <a href="/" class="nav-link">
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
              <a href="/#web-projects" class="nav-link">
                <span class="nav-link-name">Web projects</span>
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
              <a href="/#ml-projects" class="nav-link">
                <span class="nav-link-name">ML projects</span>
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
            <a class="navbar-brand" href="/">
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
                      href="/"
                      class="nav-link"
                     
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
                      href="/"
                      class="nav-link"
                   
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
                      href="/about"
                      class="nav-link"
                      
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
                        href="mailto:zzahrizhal.ali@gmail.com"
                        class="text-decoration-none"
                      >
                        zzahrizhal.ali@gmail.com
                      </a>
                    </li>
                    <li class="list-group-item">
                      GitHub:{" "}
                      <a
                        href="github.com/ZahrizhalAli"
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
                <SocialLinks/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
