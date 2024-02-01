import React from 'react';
import { getImageUrl } from '../../utils';
import styles from "./Contact.module.css"

const Contact = () => {
  return (
    <>
    <footer id="contact" className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out!</p>
        </div>

        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt="EmailIcon"></img>
                <a href="mailto:akhilp605@gmail.com">akhilp605@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkIcon"></img>
                <a href="www.linkedin.com/in/akhil-p-a55202182">linkedin/Akhil</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/githubIcon.png")} alt="GitIcon"></img>
                <a href="https://github.com/itsakhilp">github/itsakhilp</a>
            </li>
        </ul>

    </footer>
        <p className={styles.copyryt}>© AKHIL PORTFOLIO</p>
 </>
        )
}

export default Contact