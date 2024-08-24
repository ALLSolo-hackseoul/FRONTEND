import { HeadersComponent, Ranking } from "./component"
import style from "./style.module.css"

const SearchPage = () => {
    return (
        <div className={style.main__init__}>
            <div className={style.main_container}>
                <HeadersComponent />
                <Ranking />
            </div>
        </div>
    )
}

export default SearchPage;