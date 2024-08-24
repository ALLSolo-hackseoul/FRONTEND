import style from "./style.module.css";
import { Logo } from "../../components";
import { LuSearch, LuBadgePercent, LuShoppingCart, LuMapPin, LuSlidersHorizontal } from "react-icons/lu";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa6";
import { BiMessageSquareDots } from "react-icons/bi";

export const TitleBar = () => {
    return (
        <div className={style.title_bar}>
            <MainHeader />
            <SearchBar link="/search" />
        </div>
    )
}

const MainHeader = () => {
    return (
        <header className={`${style.main_header} ${style.padding_lr}`}>
            <div>
                <Logo className={style.margin_r_10} height={24} width={undefined} />
                <span className={style.location}><LuMapPin />우리 집</span>
            </div>
            <div>
                <h2 className={style.margin_r_20}><LuBadgePercent /></h2>
                <h2><LuShoppingCart /></h2>
            </div>
        </header>
    )
}

const SearchBar = ({ link }: { link: string }) => {
    return (
        <div onClick={() => { document.location = link }} className={`${style.flex_10} ${style.margin_t_20} ${style.padding_lr}`}>
            <div className={style.search_bar}>
                <LuSearch /><span>How about 마라탕</span>
            </div>
            <div className={style.filter_btn}><LuSlidersHorizontal /></div>
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
            <div className={style.noScrollBar} style={{ display: "flex", overflowX: "scroll", marginTop: "10px" }}>
                {
                    data.map((item, i) => {
                        return (
                            <div className={id === i ? style.div_select : style.div_unselect} key={i} onClick={() => SetID(i)}>{item}</div>
                        )
                    })
                }
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
                <div style={{ display: "flex", alignItems: "center", flexDirection: "column", width: "100%", paddingLeft: "20px", paddingRight: "20px" }}>
                    <img src="/item/Restraunt.png" style={{ width: "100%", paddingLeft: "20px", paddingRight: "20px", top: "15px", position: "relative" }} />
                    <div style={{ opacity: "0.9", backgroundColor: "#151719", width: "100%", padding: "10px", color: "white", borderRadius: "0.5em", display: "flex", flexDirection: "column", bottom: "15px", position: "relative" }}>
                        <h3 style={{ opacity: "1", }}>해우리 잠실역점</h3>
                        <span style={{ opacity: "1", display: "flex" }}><h4 style={{ color: "yellow", marginRight: "5px" }}><FaStar /></h4> 4.2 (157)</span>
                    </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", marginTop: "20px", flexDirection: "column", width: "100%", paddingLeft: "20px", paddingRight: "20px" }}>
                    <img src="/item/Restraunt.png" style={{ width: "100%", paddingLeft: "20px", paddingRight: "20px" }} />
                    <div style={{ opacity: "0.9", backgroundColor: "#151719", width: "100%", padding: "10px", color: "white", borderRadius: "0.5em", display: "flex", flexDirection: "column", bottom: "30px", position: "relative" }}>
                        <h3 style={{ opacity: "1", }}>해우리 잠실역점</h3>
                        <span style={{ opacity: "1", display: "flex" }}><h4 style={{ color: "yellow", marginRight: "5px" }}><FaStar /></h4> 4.2 (157)</span>
                    </div>
                </div>
            </div>
        </div >
    );
};