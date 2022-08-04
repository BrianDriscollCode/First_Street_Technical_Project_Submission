import styles from "../styles/Footer.module.css";
import Image from "next/image";
import Link from "next/link"

const Footer = () => {

    return (

        <div>

            <div id={styles.footer_wrapper}>

                <hr />

                <div id={styles.footer_content_wrapper}>

                    <div id={styles.left_footer_logo}>
                        <Image src="/logo.png" alt="temp3" width="50" height="50"/>
                    </div>

                    <div id={styles.right_footer_section}>
                        <Link href="/"> Terms </Link>
                        <Link href="/"> Privacy </Link>
                        <Link href="/"> Sitemap </Link>

                    </div>

                </div>


            </div>

        </div>


    )

}

export default Footer;