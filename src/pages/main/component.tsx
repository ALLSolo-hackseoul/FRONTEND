import { CiLocationOn } from "react-icons/ci";
import styles from "./style.module.css";

export const MainHeader = () => {
    return (
        <header>
            <img src="/Logo.svg" />
        </header>
    )
}

export const SearchBar = () => {
    return (
        <div className={styles.searchbar}>
            <div className={styles.outer_left_searchbar}>
                <img src="/Search.svg" className={styles.inner_searchbar_image} />
                <input type="text" className={styles.inner_left_searchbar}/>
            </div>
            <div className={styles.outer_center_searchbar}></div>
            <CiLocationOn className={styles.inner_right_image}/>
            <div className={styles.outer_right_searchbar}>
                <div className={styles.inner_right_searchbar}>Tower 730</div>
            </div>
        </div>
    )
}