import style from "./style.module.css";
import { CiLocationOn } from "react-icons/ci";
import { LuSearch, LuBadgePercent, LuShoppingCart, LuSlidersHorizontal } from "react-icons/lu";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa6";
import { BiMessageSquareDots } from "react-icons/bi";

export const MainHeader = () => {
    return (
        <header className={style.main_header}>
            <img src="/Logo.svg" />
            <div style={{ display: "flex" }}>
                <h2 style={{ display: "flex", alignItems: "center", justifyContent: "center", marginRight: "15px" }}><LuBadgePercent /></h2>
                <h2 style={{ display: "flex", alignItems: "center", justifyContent: "center" }}><LuShoppingCart /></h2>
            </div>

        </header>
    )
}

export const SearchBar = () => {
    return (
        <div style={{ padding: "10px" }}>
            <div style={{ display: "flex" }}>
                <div style={{ display: "flex", flexWrap: "nowrap", flex: 1 }}>
                    <div style={{ borderRadius: "1.5em", border: "1px solid #AAAAAA", display: "flex", padding: "5px", flex: 1 }}>
                        <h3 style={{ display: "flex", alignItems: "center", justifyContent: "center", marginRight: "10px" }}><LuSearch /></h3>
                        <input style={{ all: "unset" }} placeholder="How about 마라탕" />
                    </div>
                    <div style={{ marginLeft: "10px", backgroundColor: "#FF7A00", width: "36px", height: "36px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "100%", padding: "5px" }}><h3 style={{ display: "flex", alignItems: "center", justifyContent: "center", color: "white" }}><LuSlidersHorizontal /></h3></div>
                </div>
            </div>
            <span style={{ userSelect: "none", cursor: "pointer", color: "rgb(135, 135, 135)", fontWeight: "600", marginTop: "5px", display: "flex", alignItems: "center", marginLeft: "10px" }}><CiLocationOn style={{ marginRight: "10px" }} />Tower 730</span>
        </div>



    )
}

export const NavFoodBar = () => {
    const [params, setParams] = useSearchParams();
    const navigate = useNavigate();
    const [scrollPosition, setScrollPosition] = useState(0);

    let tag = params.get("tag");
    if (tag === null) {
        tag = "1";
    }

    useEffect(() => {
        // Restore scroll position when component mounts
        window.scrollTo(0, scrollPosition);
    }, [scrollPosition]);

    const handleClick = (i: number) => {
        setScrollPosition(window.scrollY);
        navigate(`/?tag=${Number(i + 1)}`);
    };

    const data = [
        {
            url: "/icon_list/all.svg",
            name: "All"
        },
        {
            url: "/icon_list/korean.svg",
            name: "Korean"
        },
        {
            url: "/icon_list/grilled.svg",
            name: "Grilled"
        },
        {
            url: "/icon_list/seafood.svg",
            name: "SeaFood"
        },
        {
            url: "/icon_list/japanese.svg",
            name: "Japanese"
        },
        {
            url: "/icon_list/fastfood.svg",
            name: "Fast food"
        },
        {
            url: "/icon_list/drink.svg",
            name: "Drink"
        }
    ];

    return (
        <div className={style.navfoodbar}>
            {data.map((item, i) => {
                const is_select_profile = String(i + 1) === tag;
                const is_select_p = is_select_profile;

                return (
                    <div key={i} onClick={() => handleClick(i)}>
                        <div className={is_select_profile ? style.profile_select : style.profile_unselect}>
                            <img src={item.url} />
                        </div>
                        <p className={is_select_p ? style.profile_select_p : style.profile_unselect_p}>
                            {item.name}
                        </p>
                    </div>
                );
            })}
        </div>
    );
};


export const GourmentRecommended = () => {
    const data = [
        {
            name: "Hot Crispy\nBurger",
            url: "/item/burger.png",
            price: "6.11",
            star: "4.2",
            star_count: "157"
        },
        {
            name: "Banana\nPongcrush",
            url: "/item/drink.png",
            price: "6.11",
            star: "4.2",
            star_count: "157"
        }
    ];

    return (
        <div className={style.gr_container}>
            <header>
                <h2 style={{ marginRight: "auto" }}>Gourmet Recommended</h2>
                <span style={{ color: "#AAAAAA" }}>더보기</span>
            </header>
            <div className={style.gr_boxes}>
                {
                    data.map((item, i) => {
                        return (
                            <div className={style.box} key={i}>
                                <div
                                    className={style.background}
                                    style={{ backgroundImage: `url('${item.url}')` }}
                                ></div>
                                <div className={style.content}>
                                    <h1 style={{ whiteSpace: "pre-line" }}>{item.name}</h1>
                                </div>
                                <div className={style.content}>
                                    <h2 style={{ whiteSpace: "pre-line" }}>$ {item.price}</h2>
                                </div>
                                <div className={style.content}>
                                    <span style={{ whiteSpace: "pre-line" }}><span style={{ color: "yellow" }}><FaStar /></span> {item.star} ({item.star_count})</span>
                                </div>
                                <div style={{ display: "flex" }}>
                                    <div className={style.content_bottom}>
                                        Add to Cart
                                    </div>
                                    <div className={style.content_bottom_1}>
                                        <h2 style={{ display: "flex", alignItems: "center", justifyContent: "center" }}><BiMessageSquareDots /></h2>
                                    </div>
                                    <div className={style.content_bottom_1}>
                                        <h2 style={{ display: "flex", alignItems: "center", justifyContent: "center" }}><BiMessageSquareDots /></h2>
                                    </div>
                                </div>

                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export const Restaurants = () => {
    const data = ["Recently Order", "Most Popular", "Closest", "On Sale"];
    const [id, SetID] = useState(0);

    return (
        <div className={style.r_container}>
            <header>
                <h2 style={{ marginRight: "auto" }}>Restaurants</h2>
            </header>
            <div style={{ display: "flex", overflowX: "scroll", marginTop: "10px" }}>
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