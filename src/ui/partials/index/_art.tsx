import React from "react";

import phone from "../../../assets/images/illustration-phones.svg";
import circles from "../../../assets/images/bg-pattern-circles.svg";
import circlesDesktop from "../../../assets/images/bg-pattern-circles-desktop.svg";

const art: React.FC = () => {
    return (
        <div className="w-full bg-gradient-to-br from-very-dark-gray to-very-dark-desaturated-blue flex items-center relative justify-center rounded-tr-[100px] rounded-bl-[100px] lg:h-400">
            <div className="hidden lg:block absolute top-0 left-0 w-full h-full overflow-hidden">
                <img
                    className="max-w-none -translate-y-[49.9%] -translate-x-[20rem] w-[100rem]"
                    src={circles}
                    alt="bg circles"
                />
            </div>
            <div className="w-full max-w-default flex flex-col lg:flex-row justify-center items-center relative lg:px-16">
                <div className="w-full lg:h-400 flex items-center lg:items-start justify-center flex-col overflow-hidden">
                    <img
                        className="w-[55rem] -translate-y-[35%] lg:translate-y-0 lg:-translate-x-40 lg:left-0 absolute z-10"
                        src={phone}
                        alt="illustration phones"
                    />

                    <img
                        className="w-500 max-w-none lg:hidden -translate-y-[11rem]"
                        src={circles}
                        alt="bg circles"
                    />
                </div>

                <div className="w-full flex items-center lg:items-start justify-center bottom-0 -translate-y-[95%] lg:-translate-y-0 flex-col gap-8 px-38 lg:px-0">
                    <h2 className="text-white font-bold font-overpass text-3xl lg:text-4xl text-center">
                        State of the Art Infrastructure
                    </h2>
                    <p className="text-base text-grayish-blue text-center lg:text-left lg:w-11/12">
                        With reliability and speed in mind, worldwide data
                        centers provide the backbone for ultra-fast
                        connectivity. This ensures your site will load
                        instantly, no matter where your readers are, keeping
                        your site competitive.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default art;
