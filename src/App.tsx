import Header from "./ui/components/surface/Header/Header";
import Hero from "./ui/partials/index/_hero";

function App() {
    return (
        <div className="App bg-slate-500 h-[100vh]">
            <div className="w-full flex flex-col items-center justify-center rounded-bl-[50px] gap-60 md:gap-120 md:rounded-bl-[50px] bg-light-red">
                <Header />
                <Hero />
            </div>
        </div>
    );
}

export default App;
