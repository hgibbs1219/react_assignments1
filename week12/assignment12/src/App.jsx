import './App.css'
function ProjectCard({ name, description }) {
  return (
    <article className="project-card">
      <h2 className="project-card__title">{name}</h2>
      <p className="project-card__description">{description}</p>
    </article>
  );
}
function Footer() {
  return (
    <footer className="app-footer">
      <p>© 2026 My React App. All rights reserved.</p>
    </footer>
  );
}
function App() {
  return (
    <main className="project">
      <h1 className="project__title">Hello World!</h1>
      <ProjectCard name="Red Ball" description="This was my first project!" />

      <ProjectCard
        name="Animated Red Ball"
        description="This is my second project!"
      />

      <ProjectCard
        name="Bouncing Red Ball"
        description="This is my third project!"
      />
      <Footer />
    </main>
  );
}

export default App;