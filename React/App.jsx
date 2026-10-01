function Navbar() {
  return (
    <nav>
      <h2>My Website</h2>
    </nav>
  );
}

function Hero() {
  return (
    <section>
      <h1>Hello React 🚀</h1>
      <p>React berjalan dari file terpisah.</p>
    </section>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <Hero />
    </>
  );
}

ReactDOM.createRoot(
  document.getElementById("root")
).render(<App />);