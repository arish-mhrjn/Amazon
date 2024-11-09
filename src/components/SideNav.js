import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const SideNav = ({ title, one, two, three }) => {
    return (
        <div className="py-3" style={{ borderBottom: "1px solid lightgray" }}>
            <h3 className="text-xl tracking-wide font-bold font-sans mb-1 px-6">
                {title}
            </h3>
            <ul>
                <li className="flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer">
                    {one}
                    <span>
                        <KeyboardArrowRightIcon></KeyboardArrowRightIcon>
                    </span>
                </li>
                <li className="flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer">
                    {two}
                    <span>
                        <KeyboardArrowRightIcon></KeyboardArrowRightIcon>
                    </span>
                </li>
                <li className="flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer">
                    {three}
                    <span>
                        <KeyboardArrowRightIcon></KeyboardArrowRightIcon>
                    </span>
                </li>
            </ul>
        </div>
    );
};

export default SideNav;
