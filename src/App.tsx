import { useEffect, useState } from "react";
import Splash from "./components/Splash";
import Home from "./pages/Home";

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
        return <Splash isExitingSplash={isExitingSplash} />;
    }

    return <Home />;
}
