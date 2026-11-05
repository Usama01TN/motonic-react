import Layout from "../components/Layout";
import HeroStaticImage from "../sections/HeroStaticImage";
import AboutSection from "../sections/AboutSection";
import ServiceSection from "../sections/ServiceSection";
import FunFactSection from "../sections/FunFactSection";
import PricingSection from "../sections/PricingSection";
import TeamArea from "../sections/TeamArea";
import BlogSection from "../sections/BlogSection";
import ContactArea from "../sections/ContactArea";
import ClientArea from "../sections/ClientArea";

export default function HomeOne() {
    return (
        <Layout headerStyle="header-style-2">
            <HeroStaticImage />
            <AboutSection />
            <ServiceSection />
            <FunFactSection />
            <PricingSection />
            <TeamArea />
            <BlogSection />
            <ContactArea />
            <ClientArea />
        </Layout>
    );
}
