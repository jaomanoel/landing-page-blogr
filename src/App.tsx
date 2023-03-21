import Header from "./ui/components/surface/Header/Header";

function App() {
    return (
        <div className="App bg-slate-500 h-[100vh]">
            <div className="w-full flex flex-col items-center justify-center rounded-bl-[160px] md:rounded-bl-full bg-light-red">
                <Header />
            </div>
        </div>
    );
}

export default App;
