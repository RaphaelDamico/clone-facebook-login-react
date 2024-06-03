import styles from "./styles.module.css";
import { FaPlus } from "react-icons/fa6";

function Footer() {
    return(
        <div className={styles.footerContainer}>
            <div className={styles.footerContent}>
                <ul className={styles.uiList}>
                    <li><a className={styles.linkLocale} href="http://localhost:5173/">Português (Brasil)</a></li>
                    <li><a className={styles.linkLocale} href="https://www.facebook.com/?locale=en_US">English (US)</a></li>
                    <li><a className={styles.linkLocale} href="https://es-la.facebook.com/?locale=es_LA">Español</a></li>
                    <li><a className={styles.linkLocale} href="https://www.facebook.com/?locale=fr_FR">Français (France)</a></li>
                    <li><a className={styles.linkLocale} href="https://www.facebook.com/?locale=it_IT">Italiano</a></li>
                    <li><a className={styles.linkLocale} href="https://www.facebook.com/?locale=de_DE">Deutsch</a></li>
                    <li><a className={styles.linkLocale} href="https://www.facebook.com/?locale=ar_AR">العربية</a></li>
                    <li><a className={styles.linkLocale} href="https://www.facebook.com/?locale=hi_IN">हिन्दी</a></li>
                    <li><a className={styles.linkLocale} href="https://www.facebook.com/?locale=zh_CN">中文(简体)</a></li>
                    <li><a className={styles.linkLocale} href="https://www.facebook.com/?locale=ja_JP">日本語</a></li>
                    <li><button className={styles.plusBtn}><FaPlus className={styles.faPlus} color = "#626978"/></button></li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;