import { useSearchParams } from "react-router-dom"
import { HeadersComponent, Ranking, SearchResult } from "./component"
import style from "./style.module.css"

const SearchPage = () => {
    const [params, SetParams] = useSearchParams();
    const search_txt = params.get("q")

    return (
        <div className={style.main__init__}>
            <div className={style.main_container}>
                {
                    search_txt === null ? <><HeadersComponent /><Ranking /></> : <><HeadersComponent /><SearchResult /></>
                }

            </div>
        </div>
    )
}

export default SearchPage;