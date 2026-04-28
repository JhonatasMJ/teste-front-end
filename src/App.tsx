import { useEffect, useState } from "react";
import Header from "./components/Header";
import TopBar from "./components/TopBar";
import Logo from "@/assets/Logo.svg";
import Banner from "./components/Banner";
import Categories from "./components/Categories";
import { productsData } from "./mocks/Products";
import Products from "./components/Products";
import Partners from "./components/Partners";

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
            <div
                className={`splash-screen${isExitingSplash ? " splash-screen--exiting" : ""}`}
            >
                <div className="splash-screen__logo-wrap">
                    <img src={Logo} alt="Econverse" className="splash-screen__logo" />
                </div>
            </div>
        );
    }

    return (
        <main>
            <TopBar />
            <Header />
            <Banner/>
            <Categories />
            <Products products={productsData.products} />
            <Partners />
        </main>
    );
}
