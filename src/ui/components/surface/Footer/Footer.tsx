import React from "react";

export interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
    return (
        <div className="w-full px-16 xl:px-0 flex items-center justify-center bg-very-dark-black-blue py-60 rounded-tr-[10rem]">
            <div className="w-full md:max-w-default flex flex-col md:flex-row items-center md:items-start justify-between gap-48">
                <h3 className="font-bold text-white font-ubuntu text-4xl">
                    Blogr
                </h3>

                <div className="flex flex-col items-center md:items-start gap-24">
                    <h3 className="text-white font-bold text-base font-ubuntu">
                        Product
                    </h3>
                    <nav>
                        <ul className="flex items-center md:items-start justify-center gap-12 flex-col">
                            <li>
                                <a
                                    className="text-base hover:underline text-grayish-blue"
                                    href="#"
                                >
                                    Overview
                                </a>
                            </li>
                            <li>
                                <a
                                    className="text-base hover:underline text-grayish-blue"
                                    href="#"
                                >
                                    Pricing
                                </a>
                            </li>
                            <li>
                                <a
                                    className="text-base hover:underline text-grayish-blue"
                                    href="#"
                                >
                                    Marketplace
                                </a>
                            </li>
                            <li>
                                <a
                                    className="text-base hover:underline text-grayish-blue"
                                    href="#"
                                >
                                    Features
                                </a>
                            </li>
                            <li>
                                <a
                                    className="text-base hover:underline text-grayish-blue"
                                    href="#"
                                >
                                    Integrations
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className="flex flex-col items-center md:items-start gap-24">
                    <h3 className="text-white font-bold text-base font-ubuntu">
                        Company
                    </h3>
                    <nav>
                        <ul className="flex items-center md:items-start justify-center gap-12 flex-col">
                            <li>
                                <a
                                    className="text-base hover:underline text-grayish-blue"
                                    href="#"
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    className="text-base hover:underline text-grayish-blue"
                                    href="#"
                                >
                                    Team
                                </a>
                            </li>
                            <li>
                                <a
                                    className="text-base hover:underline text-grayish-blue"
                                    href="#"
                                >
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a
                                    className="text-base hover:underline text-grayish-blue"
                                    href="#"
                                >
                                    Careers
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className="flex flex-col items-center md:items-start gap-24">
                    <h3 className="text-white font-bold text-base font-ubuntu">
                        Connect
                    </h3>
                    <nav>
                        <ul className="flex items-center md:items-start justify-center gap-12 flex-col">
                            <li>
                                <a
                                    className="text-base hover:underline text-grayish-blue"
                                    href="#"
                                >
                                    Contact
                                </a>
                            </li>
                            <li>
                                <a
                                    className="text-base hover:underline text-grayish-blue"
                                    href="#"
                                >
                                    Newsletter
                                </a>
                            </li>
                            <li>
                                <a
                                    className="text-base hover:underline text-grayish-blue"
                                    href="#"
                                >
                                    LinkedIn
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Footer;
