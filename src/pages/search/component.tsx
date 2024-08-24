import style from "./style.module.css"
import { LuArrowLeft } from "react-icons/lu";
import { LuSearch } from "react-icons/lu";


export const HeadersComponent = () => {
    return (
        <header className={style.header_}>
            <h2 style={{ display: "flex", alignItems: "center", justifyContent: "center" }}><LuArrowLeft /></h2>
            <div style={{ border: "1px solid #AAAAAA", borderRadius: "1.5em", padding: "10px" }}>
                <input style={{ all: "unset" }} placeholder="How about 마라탕" />
            </div>
            <h2 style={{ display: "flex", alignItems: "center", justifyContent: "center" }}><LuSearch /></h2>
        </header>
    )
}

export const Ranking = () => {
    const Data = [
        {
            name: "떡볶이",
            url: "#"
        },
        {
            name: "치킨",
            url: "#"
        },
        {
            name: "버거",
            url: "#"
        },
        {
            name: "마라탕",
            url: "#"
        },
        {
            name: "김밥",
            url: "#"
        },
        {
            name: "김밥",
            url: "#"
        },
        {
            name: "김밥",
            url: "#"
        },
        {
            name: "김밥",
            url: "#"
        },
        {
            name: "김밥",
            url: "#"
        },
        {
            name: "김밥",
            url: "#"
        },
        {
            name: "김밥",
            url: "#"
        },
        {
            name: "김밥",
            url: "#"
        },
        {
            name: "김밥",
            url: "#"
        },
        {
            name: "김밥",
            url: "#"
        },
        {
            name: "김밥",
            url: "#"
        },
        {
            name: "김밥",
            url: "#"
        },
        {
            name: "김밥",
            url: "#"
        },
        {
            name: "김밥",
            url: "#"
        },

    ]
    return (
        <div style={{ padding: "20px" }}>
            <header style={{ display: "flex" }}>
                <h3 style={{ marginRight: "auto" }}>Popular Keywords</h3>
                <p style={{ fontSize: "0.9em" }}>Updated at 21:27</p>
            </header>
            <div style={{ marginTop: "20px" }}>
                {
                    Data.map((item, i) => {
                        return (
                            <div style={{ backgroundColor: "white", padding: "7px" }}>
                                <span className={i < 3 ? style.color : style.no_color}>{i + 1}</span> <span>{item.name}</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}