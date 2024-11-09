import React, { useEffect, useRef, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import "./Navbar.css";
import SideNav from "./components/SideNav";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CloseIcon from "@mui/icons-material/Close";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
    const ref = useRef();
    const [sideBar, setSideBar] = useState(false);
    useEffect(() => {
        document.body.addEventListener("click", (e) => {
            if (e.target.contains(ref.current)) {
                setSideBar(false);
            }
        });
    }, [sideBar, ref]);
    useEffect(() => {
        if (sideBar) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [sideBar]);
    return (
        <div className="w-full px-4 h-[36px] bg-gray-900 text-white flex items-center ">
            <ul className="flex items-center gap-2 text-sm tracking-wide">
                <li
                    onClick={() => {
                        setSideBar(true);
                    }}
                    className="headerHover gap-1"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        lineHeight: "1",
                    }}>
                    <MenuIcon />
                    <span>All</span>
                </li>

                <li className="headerHover">Today's Deals</li>
                <li className="headerHover">Customer Service</li>
                <li className="headerHover">Gift Cards</li>
                <li className="headerHover">Registry</li>
                <li className="headerHover">Sell</li>
            </ul>
            <AnimatePresence>
                {sideBar && (
                    <div className="z-50 w-full h-full text-black fixed top-0 left-0 bg-gray-900 bg-opacity-85">
                        <div
                            className="w-full h-full relative"
                            ref={ref}
                            style={{ zIndex: "600" }}>
                            <motion.div
                                initial={{ x: -500, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.3 }}
                                exit={{ x: -500, opacity: 0 }}
                                className="w-[350px] h-full bg-white border-2 border-black relative ">
                                <div className="max-h-11 w-full bg-slate-700 text-white py-2 px-6 flex items-center gap-2 ">
                                    <AccountCircleIcon />
                                    <h3 className="text-xl tracking-wide font-bold font-serif">
                                        Hello, Sign In
                                    </h3>
                                </div>
                                <div className="overflow-y-auto h-[calc(100%-44px)]">
                                    <SideNav
                                        title={"Digital Content & Devices"}
                                        one={"Amazon Music"}
                                        two={"Kindle E-readers & Books"}
                                        three={"Amazon Appstore"}
                                    />
                                    <SideNav
                                        title={"Shop by Department"}
                                        one={"Electronics"}
                                        two={"Computers"}
                                        three={"Smart Home"}
                                    />
                                    <SideNav
                                        title={"Programs & Features"}
                                        one={"Gift Cards"}
                                        two={"Amazon Live"}
                                        three={"International Shopping"}
                                    />
                                    <SideNav
                                        title={"Help & Settings"}
                                        one={"Your Account"}
                                        two={"Customer Service"}
                                        three={"Contact Us"}
                                    />
                                </div>
                                <span onClick={() => setSideBar(false)}>
                                    <CloseIcon
                                        className="cursor-pointer  absolute top-3 left-[360px] text-white flex items-center justify-center  hover:bg-red-400 hover:text-white duration-100"
                                        style={{
                                            width: "32px",
                                            height: "32px",
                                        }}
                                    />
                                </span>
                            </motion.div>
                        </div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Navbar;
