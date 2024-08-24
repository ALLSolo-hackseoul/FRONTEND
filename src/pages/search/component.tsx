import { useState } from "react";
import style from "./style.module.css"
import { LuArrowLeft } from "react-icons/lu";
import { LuSearch } from "react-icons/lu";
import { FaStar } from "react-icons/fa6";

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

export const SearchResult = () => {
    const data = ["Recently Order", "Most Popular", "Closest", "On Sale"];
    const [id, SetID] = useState(0);

    return (
        <div className={style.result_container}>
            <div style={{ display: "flex", overflowX: "scroll", scrollbarWidth: "none" }}>
                {
                    data.map((item, i) => {
                        return (
                            <div className={id === i ? style.div_select : style.div_unselect} key={i} onClick={() => SetID(i)}>{item}</div>
                        )
                    })
                }
            </div>
            <div style={{ display: "flex", flexDirection: "column", }}>
                <div style={{ display: "flex", alignItems: "center", marginTop: "20px", flexDirection: "column" }}>
                    <img src="/item/Restraunt.png" style={{ width: "90%" }} />
                    <div style={{ backgroundColor: "#151719", width: "100%", padding: "10px", color: "white", borderRadius: "0.5em", display: "flex", flexDirection: "column" }}>
                        <h3>해우리 잠실역점</h3>
                        <span style={{ display: "flex" }}><h4 style={{ color: "yellow", marginRight: "5px" }}><FaStar /></h4> 4.2 (157)</span>
                    </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", marginTop: "20px", flexDirection: "column" }}>
                    <img src="/item/Restraunt.png" style={{ width: "90%" }} />
                    <div style={{ backgroundColor: "#151719", width: "100%", padding: "10px", color: "white", borderRadius: "0.5em", display: "flex", flexDirection: "column" }}>
                        <h3>해우리 잠실역점</h3>
                        <span style={{ display: "flex" }}><h4 style={{ color: "yellow", marginRight: "5px" }}><FaStar /></h4> 4.2 (157)</span>
                    </div>
                </div>
            </div>
        </div>
    );
};