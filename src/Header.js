import React from "react";
import "./Header.css";
import logo from "./l2.png";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { NavLink } from "react-router-dom";
function Header() {
    return (
        <div className="header">
            <NavLink to="/">
                <div className="leftBarLogo">
                    <img className="header__logo" src={logo} alt="" />
                </div>
            </NavLink>
            <div className="header__search">
                <div
                    className="header__searchBoxAll"
                    style={{
                        borderTopLeftRadius: "3px",
                        borderBottomLeftRadius: "3px",
                    }}>
                    <div
                        className="header__ALL"
                        style={{
                            fontSize: "9.5px",
                            paddingLeft: "10px",
                            color: "#393535",
                            alignItems: "center",
                            display: "flex",
                        }}>
                        All
                    </div>
                    <ArrowDropDownIcon
                        className="header__downIcon"
                        style={{
                            fontSize: "22px",
                            color: "#393535",
                            paddingRight: "5px",
                            paddingLeft: "5px",
                        }}
                    />
                </div>
                <input
                    className="header__searchInput"
                    type="text"
                    style={{
                        outline: "none",
                    }}
                    placeholder="Search Amazon"
                />
                <SearchIcon
                    className="header__searchIcon"
                    style={{
                        borderTopRightRadius: "3px",
                        borderBottomRightRadius: "3px",
                        fontSize: "90px",
                    }}
                />
            </div>
            <div className="header__nav">
                <div className="header__option">
                    <span className="header__optionLineOne">Hello Guest</span>
                    <span className="header__optionLineTwo">Sign In</span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">& Orders</span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>
                <NavLink
                    to="/checkout"
                    style={{
                        color: "inherit",
                        textDecoration: "none",
                    }}>
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header__optionLineTwo header__basketCount">
                            0
                        </span>
                    </div>
                </NavLink>
            </div>
        </div>
    );
}

export default Header;
