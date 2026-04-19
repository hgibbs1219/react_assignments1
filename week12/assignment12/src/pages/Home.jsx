import Header from "../components/Header";
import ProjectList from "../components/ProjectList";
import { projects } from "../data/projectData";
import Footer from "../components/Footer";

function Home() {
    return (
        <>
            <Header />
            <main class="main-content">
                <h1>Web Programming | Spring 2026</h1>
                <p>This portfolio is a curated collection of my interactive sketches built with p5.js, brought together through the structure and flexibility of React. Each project explores a different idea, from motion and user interaction to generative visuals and creative coding experiments. By combining p5.js’s expressive canvas with React’s component-based architecture, I’ve created a space where art and code coexist seamlessly. The result is not just a gallery, but a living system of dynamic pieces that respond, evolve, and invite exploration.</p>
                <ProjectList projects={projects} />
            </main>
            <Footer />
        </>
    );
}

export default Home;