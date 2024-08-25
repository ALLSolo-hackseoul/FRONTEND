export const CameraFrame = ({ top, gap }: { top: number, gap: number }) => {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: `${gap}px`, position: "absolute", width: "100%", top: `${top}px` }}>
            <div style={{ display: "flex", justifyContent: "space-between", width: "100%", paddingLeft: "20px", paddingRight: "20px", height: "100%" }}>
                <img src="/Camera.svg" height="40px" />
                <img src="/Camera.svg" height="40px" style={{ transform: "rotate(90deg)" }} />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", width: "100%", paddingLeft: "20px", paddingRight: "20px", height: "100%" }}>
                <img src="/Camera.svg" height="40px" style={{ transform: "rotate(270deg)" }} />
                <img src="/Camera.svg" height="40px" style={{ transform: "rotate(180deg)" }} />
            </div>
        </div>
    )
};