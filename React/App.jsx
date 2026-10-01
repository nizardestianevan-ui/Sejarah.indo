function Navbar() {
    return (
        <nav className="px-3 py-6 bg-jade-500">
            <h2>My Website</h2>
        </nav>
    );
}

function Hero() {
    return (
        <section className="min-h-screen bg-jade-600">
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

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
