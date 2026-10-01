function Navbar() {
    return (
        <nav className="px-3 py-6 bg-jade-500">
            <h2 className="font-vibes text-5xl text-center items-center">
                My Website
            </h2>
        </nav>
    );
}

function main() {
    return (
        <section className="bg-jade-600 min-h-screen">
            <h1>Hello React 🚀</h1>
            <p>React berjalan dari file terpisah.</p>
        </section>
    );
}

function App() {
    return (
        <>
            <Navbar />
            <main />
        </>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
