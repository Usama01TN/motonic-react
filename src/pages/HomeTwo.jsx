import Layout from "../components/Layout";
import HeroStaticImage2 from "../sections/HeroStaticImage2";
import FeaturesStyle from "../sections/FeaturesStyle";
import AboutSection2 from "../sections/AboutSection2";
import ServiceSection from "../sections/ServiceSection";
import FunFactSectionS2 from "../sections/FunFactSectionS2";
import TestimonialArea from "../sections/TestimonialArea";
import TeamArea from "../sections/TeamArea";
import BlogSection from "../sections/BlogSection";
import ContactArea from "../sections/ContactArea";
import ClientArea from "../sections/ClientArea";

export default function HomeTwo() {
    return (
        <Layout headerStyle="header-style-2">
            <HeroStaticImage2 />
            <FeaturesStyle />
            <AboutSection2 />
            <ServiceSection />
            <FunFactSectionS2 />
            <TestimonialArea />
            <TeamArea />
            <BlogSection />
            <ContactArea />
            <ClientArea />
        </Layout>
    );
}
