import styles from './contact.module.css'

export default function Contact() {
    return(
        <div className={styles.main} id='contact'>
            <div className={styles.shapes}>
            <svg id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">                    <defs>                         <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">                            <stop id="stop1" stop-color="rgba(233.442, 230.255, 228.746, 1)" offset="0%"></stop>                            <stop id="stop2" stopColor="rgba(0, 0, 0, 1)" offset="100%"></stop>                        </linearGradient>                    </defs>                <path fill="url(#sw-gradient)" d="M19.1,-24C26.5,-20.9,35.4,-17.7,38.3,-11.8C41.1,-5.9,37.8,2.7,34,10.1C30.3,17.5,26.1,23.8,20.3,26.1C14.6,28.4,7.3,26.6,-0.4,27.1C-8,27.6,-16,30.4,-19.4,27.3C-22.7,24.2,-21.4,15.4,-23.4,8C-25.3,0.5,-30.4,-5.5,-31.2,-12.3C-32,-19.1,-28.4,-26.6,-22.4,-30.1C-16.5,-33.6,-8.3,-33.1,-1.2,-31.5C5.9,-29.8,11.7,-27,19.1,-24Z" width="100%" height="100%" transform="translate(50 50)" strokeWidth="0"  stroke="url(#sw-gradient)"></path>              </svg>
            <svg id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">                    <defs>                         <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">                            <stop id="stop1" stop-color="rgba(0, 0, 0, 1)" offset="0%"></stop>                            <stop id="stop2" stopColor="rgba(209.549, 212.251, 231.165, 1)" offset="100%"></stop>                        </linearGradient>                    </defs>                <path fill="url(#sw-gradient)" d="M23.6,-30C28.3,-24.2,28.2,-14.6,27.6,-6.5C27.1,1.5,26.1,8,23.4,14.4C20.8,20.9,16.6,27.4,10.1,31.3C3.6,35.3,-5.2,36.7,-11.4,33.5C-17.7,30.3,-21.4,22.4,-26,14.9C-30.6,7.3,-35.9,0,-35.5,-7C-35.1,-14,-29.1,-20.7,-22.2,-26.1C-15.3,-31.6,-7.7,-35.8,0.9,-36.8C9.5,-37.9,18.9,-35.9,23.6,-30Z" width="100%" height="100%" transform="translate(50 50)" strokeWidth="0"  stroke="url(#sw-gradient)"></path>              </svg>
            </div>
            <form action="submit">
            <label htmlFor="email">Name / Company</label>
            <input type="name" name="name" id="name" placeholder='Name or Company'/>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" placeholder='Your Email' />
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" placeholder='Send me a message'></textarea>
            <input type="submit" value="Submit" />
            </form>
        </div>
    )
}