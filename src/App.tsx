import Header from "./ui/components/surface/Header/Header";
import Hero from "./ui/partials/index/_hero";
import Design from "./ui/partials/index/_design";
import Art from "./ui/partials/index/_art";
import Laptop from "./ui/partials/index/_laptop";
import Footer from "./ui/components/surface/Footer/Footer";

function App() {
    return (
        <div className="App bg-white h-full overflow-hidden max-w-full">
            <div className="w-full flex flex-col items-center justify-center rounded-bl-[100px] gap-60 overflow-hidden relative bg-cover bg-center bg-gradient-to-r from-g-very-light-red to-g-light-red bg-no-repeat">
                <div
                    className={`absolute z-10 w-[365%] md:w-[165%] h-[140%] md:h-full -translate-x-[26%] md:-translate-x-[15%] top-0 bottom-0 left-0 right-0 bg-cover bg-center bg-[url('/src/assets/images/bg-pattern-intro-mobile.svg')] md:bg-[url('/src/assets/images/bg-pattern-intro-desktop.svg')]`}
                ></div>
                <Header />
                <Hero />
            </div>
            <Design />
            <Art />
            <Laptop />
            <Footer />
        </div>
    );
}

export default App;
