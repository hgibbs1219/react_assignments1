import Header from "../components/Header";
import ProjectList from "../components/ProjectList";
import { projects } from "../data/projectData";
import Footer from "../components/Footer";

function Home() {
    return (
        <>
            <Header />
            <main className="main-content">
                <h1>Web Programming | Spring 2026</h1>
                <p>
                    This portfolio is a curated collection of my interactive sketches built with p5.js, brought together through the structure and flexibility of React...
                </p>

                <ProjectList projects={projects.slice(0, 2)} />
            </main>
        </>
    );
}

export default Home;