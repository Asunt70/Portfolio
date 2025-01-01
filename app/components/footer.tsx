import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.main}>
      <div className={styles.nav}>
        <ul>
          <span className={styles.title}>Links</span>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className={styles.socials}>
        <ul>
          <span className={styles.title}>Socials</span>
          <li>
            <a
              href="http://github.com/Asunt70"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
              <svg
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Interface / External_Link">
                  <path
                    id="Vector"
                    d="M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11"
                    stroke="#ffffff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/sebasti%C3%A1n-figueroa-barco-649981261/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin
              <svg
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Interface / External_Link">
                  <path
                    id="Vector"
                    d="M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11"
                    stroke="#ffffff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.contact}>
        <ul>
          <span className={styles.title}>Contact</span>
          <li>
            <a href="mailto:sebaj348@gmail.com">sebaj348@gmail.com</a>
          </li>
          <li>
            <a href="tel:+584128516729">+584128516729</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
