import About from "@/components/About";
import Hero from "@/components/Hero";
import ProjectShowcase from "@/components/ProjectShowcase";
import Skills from "@/components/Skill";

const Home = () => {
    return (
        <div>
            <Hero/>
            <About/>
            <Skills/>
            <ProjectShowcase/>
        </div>
    );
};

export default Home;