import styles from "../styles/Extra.module.css";
import React, { useState } from "react";

const Help = () => {

    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);

    //When question is clicked, open answer
    const enableOpen = (picker) => {

        if (picker == 1) {
            setOpen1(!open1)
        } else if (picker == 2) {
            setOpen2(!open2)
        }
        

    }

    return (

        <div className={styles.extra_page}>

            <h1>   Help Page </h1> 

            <p> In the future you will be able to find help here! </p>

            <div id={styles.help_container}>

                <div 
                    className={styles.FAQ}
                    onClick={() => enableOpen(1)}
                >
                    <p className={styles.plus_sign}> + </p>
                    <p>How do find a great movie!? </p>
                </div>

                <div 
                    className={styles.FAQ} 
                    style={{
                        height: open1 ? '80px' : '0px',
                        opacity: open1 ? '1' : '0',
                        borderTop: 'none',
                    }}>
                    <p>Go to the home page and click the movie thumbnail </p>
                </div>

                <div 
                    className={styles.FAQ}
                    onClick={() => enableOpen(2)}
                    id={styles.option2}
                    style={{
                        borderTop: '0px'
                    }}
                >
                    <p className={styles.plus_sign}> + </p>
                    <p> How to go back to the home page? </p>
                </div>

                <div 
                    className={styles.FAQ} 
                    id={styles.option2}
                    style={{
                        height: open2 ? '80px' : '0px',
                        opacity: open2 ? '1' : '0',
                        borderTop: 'none',
                    }}>
                    <p>Click the logo to the top left of the page </p>
                </div>



            </div>

        </div>

    )

}

export default Help;