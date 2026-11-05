import Layout from "../components/Layout";
import HeroStaticImage3 from "../sections/HeroStaticImage3";
import AboutSection3 from "../sections/AboutSection3";
import ServiceSection from "../sections/ServiceSection";
import FunFactSection from "../sections/FunFactSection";
import PricingSection from "../sections/PricingSection";
import TeamArea from "../sections/TeamArea";
import BlogSection from "../sections/BlogSection";
import ContactArea from "../sections/ContactArea";
import ClientArea from "../sections/ClientArea";

export default function HomeThree() {
    return (
        <Layout headerStyle="header-style-1">
            <HeroStaticImage3 />
            <AboutSection3 />
            <ServiceSection variant="service-style-3" />
            <FunFactSection text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. chunks as necessary," />
            <PricingSection variant={2} />
            <TeamArea />
            <BlogSection />
            <ContactArea />
            <ClientArea />
        </Layout>
    );
}
