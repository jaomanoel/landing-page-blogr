import Header from "./ui/components/surface/Header/Header";
import Hero from "./ui/partials/index/_hero";
import Design from "./ui/partials/index/_design";

function App() {
    return (
        <div className="App bg-white h-full">
            <div className="w-full flex flex-col items-center justify-center rounded-bl-[100px] gap-60 md:gap-120 bg-light-red">
                <Header />
                <Hero />
            </div>
            <Design />
        </div>
    );
}

export default App;
