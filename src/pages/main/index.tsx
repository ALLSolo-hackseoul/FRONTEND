import { MainHeader, SearchBar } from "./component";
import style from "./style.module.css"

const MainPage = () => {

    return (
        <div className={style.main__init__}>
            <div className={style.main_container}>
                <MainHeader />
                <SearchBar />
            </div>

        </div>
    )
}

export default MainPage;