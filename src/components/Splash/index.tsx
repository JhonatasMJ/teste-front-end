import Logo from "@/assets/Logo.svg";

export default function Splash({ isExitingSplash }: { isExitingSplash: boolean }) {
    return (
        <div
            className={`splash-screen${isExitingSplash ? " splash-screen--exiting" : ""}`}
        >
            <div className="splash-screen__logo-wrap">
                <img src={Logo} alt="Econverse" className="splash-screen__logo" />
            </div>
        </div>
    );
}