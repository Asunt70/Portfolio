import styles from './contact.module.css'

export default function Contact() {
    return(
        <div className={styles.main} id='contact'>
            <div className={styles.container}>
            <div className={styles.heading}>
                <h3>Let's Contact</h3>
                <span>Make your dreams become into reality.</span>
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
        </div>
    )
}