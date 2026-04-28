import Banner from "@/components/Banner";
import Categories from "@/components/Categories";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Marks from "@/components/Marks";
import Newsletter from "@/components/Newsletter";
import Partners from "@/components/Partners";
import Products from "@/components/Products";
import TopBar from "@/components/TopBar";
import { productsData } from "@/mocks/Products";

export default function Home() {
    return (
        <main>
            <TopBar />
            <Header />
            <Banner />
            <Categories />
            <Products products={productsData.products} tabs={false} />
            <Partners />
            <Marks />
            <Products products={productsData.products} tabs={false} />
            <Newsletter />
            <Footer />
        </main>
    );
}