import React from "react";

import laptopDesktop from "../../../assets/images/illustration-laptop-desktop.svg";
import laptopMobile from "../../../assets/images/illustration-laptop-mobile.svg";

const laptop: React.FC = () => {
    return (
        <div className="w-full flex items-center justify-center pb-120 md:pb-350 pt-120 md:pt-350 px-16 overflow-hidden">
            <div className="w-full max-w-default flex flex-col items-center justify-center gap-36 relative">
                <div className="w-full flex flex-col lg:flex-row items-center justify-center lg:justify-end gap-36">
                    <picture className="lg:absolute lg:-translate-x-2/4 lg:left-0 lg:w-800">
                        <source
                            className="w-75 h-77 max-w-none"
                            media="(min-width: 1024px)"
                            srcSet={laptopDesktop}
                        />
                        <img
                            className="max-w-none"
                            src={laptopMobile}
                            alt="iillustration laptop"
                        />
                    </picture>

                    <div className="flex flex-col items-center gap-24 max-w-4xl">
                        <div className="text-center md:text-left">
                            <h3 className="font-bold font-overpass text-3xl text-very-dark-blue pb-20">
                                Free, open, simple
                            </h3>
                            <p className="text-base  font-overpass">
                                Blogr is a free and open source application
                                backed by a large community of helpful
                                developers. It supports features such as code
                                syntax highlighting, RSS feeds, social media
                                integration, third-party commenting tools, and
                                works seamlessly with Google Analytics. The
                                architecture is clean and is relatively easy to
                                learn.
                            </p>
                        </div>

                        <div className="text-center md:text-left">
                            <h3 className="font-bold font-overpass text-3xl text-very-dark-blue pb-20">
                                Powerful tooling
                            </h3>
                            <p className="text-base  font-overpass">
                                Batteries included. We built a simple and
                                straightforward CLI tool that makes
                                customization and deployment a breeze, but
                                capable of producing even the most complicated
                                sites.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default laptop;
