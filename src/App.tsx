import { useEffect, useState } from "react";
import Header from "./components/Header";
import TopBar from "./components/TopBar";
import Logo from "@/assets/Logo.svg";
import Banner from "./components/Banner";

export default function App() {
    const [showSplash, setShowSplash] = useState(true);
    const [isExitingSplash, setIsExitingSplash] = useState(false);

    useEffect(() => {
        const startExitTimer = window.setTimeout(() => {
            setIsExitingSplash(true);
        }, 1400);

        const hideSplashTimer = window.setTimeout(() => {
            setShowSplash(false);
        }, 1800);

        return () => {
            window.clearTimeout(startExitTimer);
            window.clearTimeout(hideSplashTimer);
        };
    }, []);

    if (showSplash) {
        return (
            <div className={`splash-screen ${isExitingSplash ? "is-exiting" : ""}`}>
                <img src={Logo} alt="Econverse" className="splash-logo" />
            </div>
        );
    }

    return (
        <div>
            <TopBar />
            <Header />
            <Banner/>
        </div>
    );
}