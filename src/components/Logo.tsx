export const Logo = ({ width, height, className }: { className: React.HTMLProps<HTMLElement>["className"], width: number | undefined, height: number | undefined }) => {
    return (
        <img className={className} src="/Logo.svg" width={width} height={height} />
    )
};