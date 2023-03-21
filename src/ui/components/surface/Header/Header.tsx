import React, { useState } from "react";
import SVG from "react-inlinesvg";
import { ReactSVG } from "react-svg";

import logo from "../../../../assets/images/logo.svg";
import hamburger from "../../../../assets/icons/icon-hamburger.svg";
import close from "../../../../assets/icons/icon-close.svg";
import arrowDark from "../../../../assets/icons/icon-arrow-dark.svg";
import arrowLight from "../../../../assets/icons/icon-arrow-light.svg";
import Button from "../../inputs/Button/Button";

export interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
    const [open, setOpen] = useState<boolean>(false);

    const handleOpen = () => {
        setOpen(!open);
    };

    return (
        <div className="pt-30 w-full px-16 xl:px-0 flex items-center justify-center">
            <div className="w-full relative max-w-default flex flex-col items-center justify-center gap-40">
                <div className="w-full flex items-center justify-between">
                    <div className="flex items-center gap-24">
                        <img src={logo} alt="Blogr" />

                        <div className="hidden md:flex items-center">
                            <nav>
                                <ul className="flex items-center">
                                    <li className="w-140 flex items-center justify-center">
                                        <input
                                            className="hidden peer"
                                            type="radio"
                                            name="menu"
                                            id="product"
                                        />
                                        <label
                                            className="flex items-center gap-12"
                                            htmlFor="product"
                                        >
                                            <span className="text-white cursor-pointer font-ubuntu hover:underline text-base font-bold">
                                                Product
                                            </span>
                                            <img
                                                src={arrowLight}
                                                alt="product"
                                            />
                                        </label>
                                    </li>
                                    <li className="w-140 flex items-center justify-center">
                                        <input
                                            className="hidden peer"
                                            type="radio"
                                            name="menu"
                                            id="company"
                                        />
                                        <label
                                            className="flex items-center gap-12"
                                            htmlFor="company"
                                        >
                                            <span className="text-white cursor-pointer font-ubuntu hover:underline text-base font-bold">
                                                Company
                                            </span>
                                            <img
                                                src={arrowLight}
                                                alt="company"
                                            />
                                        </label>
                                    </li>
                                    <li className="w-140 flex flex-col items-center justify-between relative">
                                        <input
                                            className="hidden peer"
                                            type="radio"
                                            name="menu"
                                            id="connect"
                                        />

                                        <label
                                            className="flex items-center gap-12"
                                            htmlFor="connect"
                                        >
                                            <span className="text-white cursor-pointer font-ubuntu hover:underline text-base font-bold">
                                                Connect
                                            </span>
                                            <img src={arrowLight} alt="" />
                                        </label>

                                        <div className="w-full absolute translate-y-40 hidden peer-checked:block rounded-xl bg-white px-20 py-24">
                                            <nav>
                                                <ul className="flex flex-col gap-16">
                                                    <li>
                                                        <a
                                                            className="text-very-dark-black-blue hover:text-very-dark-blue font-ubuntu text-sm hover:font-bold"
                                                            href="#"
                                                        >
                                                            Contact
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="text-very-dark-black-blue hover:text-very-dark-blue font-ubuntu text-sm hover:font-bold"
                                                            href="#"
                                                        >
                                                            Newsletter
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="text-very-dark-black-blue hover:text-very-dark-blue font-ubuntu text-sm hover:font-bold"
                                                            href="#"
                                                        >
                                                            LinkedIn
                                                        </a>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>

                    <div className="hidden md:flex items-center gap-24">
                        <a
                            href="#"
                            className="text-white font-bold font-ubuntu text-base"
                        >
                            Login
                        </a>

                        <a href="#">
                            <Button
                                label="Sign up"
                                style="bg-gradient-to-r from-g-very-light-red to-g-light-red px-24 text-white capitalize font-overpass hover:bg-very-light-red curso-pointer"
                            />
                        </a>
                    </div>

                    <button
                        onClick={handleOpen}
                        className="block md:hidden cursor-pointer"
                    >
                        <img
                            src={open ? close : hamburger}
                            alt={open ? "fechar menu" : "abrir menu"}
                        />
                    </button>
                </div>

                {open && (
                    <div className="w-full">
                        <nav className="bg-white w-full py-24 px-24 rounded-lg flex flex-col gap-24 justify-center ">
                            <ul className="w-full flex flex-col items-center justify-center gap-24">
                                <li className="w-full flex items-center justify-center">
                                    <input
                                        className="peer hidden"
                                        type="radio"
                                        name="menu"
                                        id="product"
                                    />
                                    <label
                                        htmlFor="product"
                                        className="flex items-center text-very-dark-black-blue hover:text-very-dark-blue font-overpass gap-4 font-semibold text-lg peer-checked:>>>img:rotate-10"
                                    >
                                        Product
                                        <img src={arrowDark} alt="Product" />
                                    </label>
                                </li>
                                <li className="w-full flex items-center justify-center">
                                    <input
                                        className="peer hidden"
                                        type="radio"
                                        name="menu"
                                        id="company"
                                    />
                                    <label
                                        htmlFor="company"
                                        className="flex items-center text-very-dark-black-blue hover:text-very-dark-blue font-overpass gap-4 font-semibold text-lg
                                        peer-checked:img:rotate-90"
                                    >
                                        Company{" "}
                                        <img src={arrowDark} alt="Company" />
                                    </label>
                                </li>
                                <li className="w-full flex flex-col gap-24 items-center justify-center">
                                    <input
                                        className="peer hidden"
                                        type="radio"
                                        name="menu"
                                        id="connect"
                                    />
                                    <label
                                        htmlFor="connect"
                                        className="flex items-center text-very-dark-black-blue hover:text-very-dark-blue font-overpass gap-4 font-semibold text-lg
                                        peer-checked:img:rotate-90"
                                    >
                                        Connect{" "}
                                        <img src={arrowDark} alt="Connect" />
                                    </label>

                                    <div className="w-full hidden peer-checked:block bg-grayish-blue rounded-xl">
                                        <ul className="w-full py-24 flex flex-col items-center justify-center gap-20">
                                            <li>
                                                <a
                                                    className="text-base hover:underline text-very-dark-blue font-overpass font-semibold"
                                                    href="#"
                                                >
                                                    Contact
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="text-base hover:underline font-overpass text-very-dark-blue font-semibold"
                                                    href="#"
                                                >
                                                    Newsletter
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="text-base hover:underline font-overpass text-very-dark-blue font-semibold"
                                                    href="#"
                                                >
                                                    LinkedIn
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>

                            <div className="w-full h-[1px] bg-grayish-blue"></div>

                            <div className="w-full flex flex-col gap-20 items-center justify-center">
                                <h3 className="font-semibold text-xl text-very-dark-blue font-overpass">
                                    Login
                                </h3>

                                <Button
                                    label="Sign up"
                                    style="bg-gradient-to-r from-g-very-light-red to-g-light-red px-24 text-white capitalize font-overpass hover:bg-very-light-red"
                                />
                            </div>
                        </nav>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Header;
