import './App.css'
function SimpleCard({ title, content }) {
  return (
    <div className="simple-card">
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
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
    <div>
      <h2>Hello World!</h2>
      {/* SimpleCard component with 2 props */}
      <SimpleCard
        title="My First Card"
        content="This is a simple card component with title and content."
      />
      <SimpleCard
        title="Another Card"
        content="You can reuse this component multiple times with different props."
      />

      {/* Footer component */}
      <Footer />
    </div>
  );
}
export default App;
