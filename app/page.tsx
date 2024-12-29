import styles from "./page.module.css";
import NavBar from "./components/navBar";
import Image from "next/image";
import Contact from "./components/contact";
import Footer from "./components/footer";
// import About from './components/about'
import Projects from "./components/projects";
import CopyButton from "./components/copyButton";
export default function Home() {
  return (
    <>
      <NavBar />
      <div className={styles.container} id="home">
        <div className={styles.home}>
          <div className={styles.background}></div>
          <div className={styles.card}>
            <div className={styles.imageContainer}>
              <Image
                className={styles.photo}
                src="/me.webp"
                fill={true}
                alt="personal image"
              />
            </div>
            <h1>Sebastián Figueroa</h1>
            <span>Front-end Developer</span>
            <div className={styles.links}>
              <a
                href="http://github.com/Asunt70"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  height="32"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="32"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                  ></path>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/sebasti%C3%A1n-figueroa-barco-649981261/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  version="1.0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 635.000000 540.000000"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <g
                    transform="translate(0.000000,540.000000) scale(0.100000,-0.100000)"
                    fill="#000000"
                    stroke="none"
                  >
                    <path
                      d="M278 5376 c-105 -38 -201 -127 -240 -224 l-23 -57 0 -2375 0 -2375
23 -57 c31 -76 105 -156 184 -199 l63 -34 2400 0 2400 0 62 34 c77 41 146 113
181 189 l27 57 0 2385 0 2385 -27 57 c-35 76 -109 153 -183 192 l-60 31 -2385
2 c-1945 2 -2392 0 -2422 -11z m1051 -735 c84 -26 137 -59 202 -128 63 -66 89
-111 114 -197 23 -77 16 -199 -14 -278 -96 -249 -387 -368 -624 -255 -294 139
-358 521 -126 747 119 115 295 159 448 111z m2538 -1207 c45 -8 120 -28 167
-45 285 -103 437 -316 509 -714 22 -117 22 -139 22 -980 l0 -860 -395 0 -395
0 -6 780 c-5 710 -7 785 -23 840 -28 93 -66 162 -113 206 -65 60 -121 81 -235
87 -223 11 -360 -58 -438 -223 -64 -137 -64 -135 -70 -950 l-5 -740 -395 0
-395 0 -3 1278 -2 1277 385 0 385 0 0 -177 0 -178 27 40 c135 202 357 342 590
374 84 12 280 4 390 -15z m-2269 -1321 l-3 -1278 -395 0 -395 0 -3 1278 -2
1277 400 0 400 0 -2 -1277z"
                    />
                  </g>
                </svg>
              </a>
              <CopyButton textToCopy="sebaj348@gmail.com" />
            </div>
          </div>
        </div>
      </div>
      {/* <About/> */}
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
