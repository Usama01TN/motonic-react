import Layout from "../components/Layout";
import PageTitle from "../components/PageTitle";
import AboutSection4 from "../sections/AboutSection4";
import FunFactSectionS2 from "../sections/FunFactSectionS2";
import ServiceSection from "../sections/ServiceSection";
import TeamArea from "../sections/TeamArea";

export default function About() {
    return (
        <Layout>
            <PageTitle title="About us" />
            <div className="about-page-style">
                <AboutSection4 />
                <FunFactSectionS2 />
                <ServiceSection />
                <TeamArea />
            </div>
        </Layout>
    );
}
