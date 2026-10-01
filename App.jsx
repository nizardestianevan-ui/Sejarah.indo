function Navbar() {
    return (
        <nav className="px-3 py-6 bg-jade-500">
            <h2 className="font-vibes text-5xl text-center ">
                My Website
            </h2>
        </nav>
    );
}

function main() {
    return (
        <div className="bg-jade-600 min-h-screen">
            <h1>Hello React 🚀</h1>
            <p>React berjalan dari file terpisah.</p>
        </div>
    );
}
function fooster(){
  return(
    <fooster>
    <h2>tes</h2>
    </fooster>
  );
}

function App() {
    return (
        <>
            <Navbar />
            <main />
            <fooster />
        </>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
