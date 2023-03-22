import React from "react";

import editorDesktop from "../../../assets/images/illustration-editor-desktop.svg";
import editorMobile from "../../../assets/images/illustration-editor-mobile.svg";

const design: React.FC = () => {
    return (
        <div className="w-full flex items-center justify-center pt-90 px-16 overflow-hidden">
            <div className="w-full max-w-default flex flex-col items-center justify-center gap-36 relative">
                <h2 className="text-very-dark-blue font-bold font-overpass text-3xl">
                    Design for the future
                </h2>

                <div className="w-full flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-36">
                    <picture className="lg:absolute lg:translate-x-2/4 lg:right-0 lg:w-650">
                        <source
                            media="(min-width: 1024px)"
                            srcSet={editorDesktop}
                        />
                        <img src={editorMobile} alt="illustrationeditor" />
                    </picture>

                    <div className="flex flex-col items-center gap-24 max-w-4xl">
                        <div className="text-center md:text-left">
                            <h3 className="font-bold font-overpass text-3xl text-very-dark-blue pb-20">
                                Introducing an extensible editor
                            </h3>
                            <p className="text-base  font-overpass">
                                Blogr features an exceedingly intuitive
                                interface which lets you focus on one thing:
                                creating content. The editor supports management
                                of multiple blogs and allows easy manipulation
                                of embeds such as images, videos, and Markdown.
                                Extensibility with plugins and themes provide
                                easy ways to add functionality or change the
                                looks of a blog.
                            </p>
                        </div>

                        <div className="text-center md:text-left">
                            <h3 className="font-bold font-overpass text-3xl text-very-dark-blue pb-20">
                                Robust content management
                            </h3>
                            <p className="text-base  font-overpass">
                                Flexible content management enables users to
                                easily move through posts. Increase the
                                usability of your blog by adding customized
                                categories, sections, format, or flow. With this
                                functionality, you’re in full control.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default design;
