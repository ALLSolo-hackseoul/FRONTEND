// import { TitleBar, NavFoodBar, GourmentRecommended, Restaurants } from "./component";
import style from "./style.module.css";
import Webcam from "react-webcam";
import { CameraFrame } from "../../components";
import { useState } from "react";

const AuthPage = () => {
    const [comple, setComple] = useState(false);
    const [stage, setStage] = useState(0)
    return (
        <div className={style.auth_page}>
            <title><h1>{stage == 0 ? "Passport" : "Face"}</h1><h3>{stage == 0 ? "Passport" : "Face"}</h3></title>
            <CameraFrame gap={stage == 0 ? 150 : 250} top={200} />
            {comple ?
                <div className={style.comple}>
                    <img src="/Check.svg" />
                </div>
                : undefined}
            <Webcam className={style.cam} videoConstraints={{
                facingMode: stage == 0 ? "environment" : "user"
            }} />
            <div className={style.progress}><p>Recognized</p></div>
        </div>
    )
}

export default AuthPage;