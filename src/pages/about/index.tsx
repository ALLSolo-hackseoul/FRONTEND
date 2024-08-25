import style from "./style.module.css"
import { LuHeart } from "react-icons/lu";
import { FaStar } from "react-icons/fa6";
import { MdAccessTimeFilled } from "react-icons/md";
import { useState } from "react";
import { MdChatBubbleOutline } from "react-icons/md";

const AboutPage = () => {
    const [id, SetID] = useState(0);
    const list = ["Signature Menu", "New Menu", "Coffe", "Shell", "Soup"]
    const data = [
        {
            name: "32oz Americano",
            price: "9,500",
            commit: "4"
        },
        {
            name: "32oz Americano",
            price: "9,500",
            commit: "4"
        },
        {
            name: "32oz Americano",
            price: "9,500",
            commit: "4"
        },
        {
            name: "32oz Americano",
            price: "9,500",
            commit: "4"
        }
    ]
    return (
        <div className={style.main__init__}>
            <div className={style.main_container}>
                <div style={{ borderRadius: "2em", overflow: "hidden" }}>
                    <img src="/item/Restraunt.png" width={"100%"} />
                </div>
                <div style={{ padding: "10px", paddingLeft: "20px", display: "flex", flexDirection: "column" }}>
                    <div style={{ display: "flex", width: "100%" }}>
                        <h2 style={{ marginRight: "auto" }}>해우리 잠실역점</h2>
                        <h2><LuHeart /> </h2>
                    </div>
                    <div style={{ display: "flex", width: "100%", marginTop: "5px" }}>
                        <span style={{ color: "#FAC000" }}><FaStar /> </span><span style={{ fontWeight: "500", marginLeft: "5px" }}>4.2 (157)</span>
                        <span style={{ color: "#0000FA", marginLeft: "20px" }}><MdAccessTimeFilled /> </span><span style={{ fontWeight: "500", marginLeft: "5px" }}>36 min</span>
                        <span style={{ marginLeft: "auto" }}>Information</span>
                    </div>
                    <hr style={{ border: 0, height: "1px", backgroundColor: "#D9D9D9", marginTop: "5px" }} />
                    <div style={{ display: "flex", width: "100%", marginTop: "5px" }}>
                        <span style={{ fontSize: "0.9em", color: "#868686" }}>Min. Order</span>
                        <span style={{ marginLeft: "20px", fontWeight: "600" }}>₩9,500</span>
                    </div>
                    <div style={{ display: "flex", width: "100%", marginTop: "10px", backgroundColor: "#1E1E7C", padding: "8px", borderRadius: "0.5em" }}>
                        <span style={{ backgroundColor: "#376FFF", color: "white", padding: "5px", borderRadius: "1.5em", fontSize: "0.9em" }}>WOW</span><span style={{ color: "white", display: "flex", alignItems: "center", marginLeft: "10px" }}>Free Delivery</span>
                    </div>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", margin: "10px", borderBottom: "1px solid #F0F0F0" }}>
                    {
                        list.map((item, i) => {
                            return (
                                <div className={i === id ? style.select : style.none} onClick={() => SetID(i)}>{item}</div>
                            )
                        })
                    }
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    {
                        data.map((item, i) => {
                            return (
                                <div style={{ display: "flex", padding: "10px", borderTop: "1px solid #F0F0F0" }}>
                                    <div style={{ display: "felx", flexDirection: "column", marginRight: "auto" }}>
                                        <h3>{item.name}</h3>
                                        <span style={{ display: "flex", marginTop: "5px" }}>₩{item.price}</span>
                                        <span style={{ display: "flex", marginTop: "5px", alignItems: "center", color: "#AAAAAA" }}><MdChatBubbleOutline style={{ marginRight: "5px" }} /> {item.commit} Comments</span>
                                    </div>
                                    <div style={{ width: "100px", height: "100px", backgroundColor: "gray", borderRadius: "0.7em" }}></div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default AboutPage;