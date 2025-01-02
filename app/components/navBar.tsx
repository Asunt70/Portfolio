"use client";
import { useState } from "react";
import styles from "./navbar.module.css";

export default function NavBar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const closeSidebar = () => setSidebar(false);
  return (
    <>
      <div className={styles.main}>
        <nav className={styles.nav}>
          <ul>
            <li>
              <a href="#home">HOME</a>
              {/* </li> */}
              {/* <li><a href="#about">ABOUT</a></li> */}
              {/* <li> */}
            </li>
            <li>
              <a href="#projects">PROJECTS</a>
            </li>
            {/* <li> */}
            {/* <a href="#contact">CONTACT</a> */}
            {/* </li> */}
          </ul>
          <div className={styles.buttons}>
            <a href="/resume.pdf" download="resume">
              <button type="button" className={styles.btnCv}>
                CV
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#e8eaed"
                >
                  <path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z" />
                </svg>
              </button>
            </a>
            <a
              href="https://www.linkedin.com/in/sebasti%C3%A1n-figueroa-barco-649981261/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnHire}
            >
              HIRE ME
            </a>
          </div>
        </nav>
        <nav className={styles.navMobile}>
          <button className={styles.showSidebar} onClick={showSidebar}>
            {!sidebar && (
              <svg
                className={styles.menu}
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#e8eaed"
              >
                <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
              </svg>
            )}
            {sidebar && (
              <svg
                className={styles.close}
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#e8eaed"
              >
                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
              </svg>
            )}
          </button>
        </nav>
      </div>
      <div className={`${styles.sidebar} ${sidebar ? styles.active : ""}`}>
        <ul>
          <li>
            <a href="#home" onClick={closeSidebar}>
              HOME
            </a>
          </li>
          {/* <li><a href="#about" onClick={closeSidebar}>ABOUT</a></li> */}
          <li>
            <a href="#projects" onClick={closeSidebar}>
              PROJECTS
            </a>
          </li>
          {/* <li> */}
          {/* <a href="#contact" onClick={closeSidebar}> */}
          {/* CONTACT */}
          {/* </a> */}
          {/* </li> */}
        </ul>
        <div className={styles.buttons}>
          <a href="/resume.pdf" download="resume" className={styles.btnCv}>
            <button type="button">
              CV
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#e8eaed"
              >
                <path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z" />
              </svg>
            </button>
          </a>
          <a
            href="https://www.linkedin.com/in/sebasti%C3%A1n-figueroa-barco-649981261/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnHire}
          >
            HIRE ME
          </a>
        </div>
      </div>
    </>
  );
}
