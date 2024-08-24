import { LuBadgePercent, LuShoppingCart } from "react-icons/lu";
import style from "./style.module.css"
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

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
        <div>

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
            url: "/icon_list/all.svg",
            name: "Korean"
        },
        {
            url: "/icon_list/all.svg",
            name: "Grilled"
        },
        {
            url: "/icon_list/all.svg",
            name: "SeaFood"
        },
        {
            url: "/icon_list/all.svg",
            name: "Chinese"
        },
        {
            url: "/icon_list/all.svg",
            name: "idk:("
        },
        {
            url: "/icon_list/all.svg",
            name: "idk:("
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