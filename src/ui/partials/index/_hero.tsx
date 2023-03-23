import React from "react";
import Button from "../../components/inputs/Button/Button";

const hero: React.FC = () => {
    return (
        <div className="w-full flex items-center z-20 justify-center px-16 md:px-0 pb-120 py-90">
            <div className="w-full flex flex-col items-center justify-center gap-36">
                <div className="flex items-center justify-center flex-col">
                    <h1 className="text-center text-white font-overpass font-semibold w-336 md:w-full text-4xl md:text-6xl">
                        A modern publishing platform
                    </h1>
                    <p className="text-center w-300 md:w-full font-overpass text-lg text-white">
                        Grow your audience and build your online brand
                    </p>
                </div>

                <div className="flex items-center gap-16">
                    <Button
                        label="Start for Free"
                        style="bg-white text-light-red px-24 hover:text-white hover:bg-very-light-red"
                    />
                    <Button
                        label="Learn More"
                        style="text-white px-24 border border-solid hover:bg-white hover:text-very-light-red"
                    />
                </div>
            </div>
        </div>
    );
};

export default hero;
