import Preloader from "./Preloader";
import Header from "./Header";
import Footer from "./Footer";
import BackToTop from "./BackToTop";

/**
 * Page shell shared by every page (replaces the repeated header/footer markup).
 * headerStyle: "header-style-1" (inner pages, home 3) | "header-style-2" (home 1 & 2)
 */
export default function Layout({ headerStyle = "header-style-1", children }) {
    return (
        <div className="page-wrapper">
            <Preloader />
            <Header headerStyle={headerStyle} />
            {children}
            <Footer />
            <BackToTop />
        </div>
    );
}
