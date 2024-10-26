import React from "react";
import "./Checkout.css";
import image from "./banner.jpeg";
function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img
                    src="https://m.media-amazon.com/images/G/01/AdProductsWebsite/images/AUX/ILB_BrightColors_Approved._TTW_.jpg"
                    alt=""
                    className="checkout__ad"
                />
                <div>
                    <h2 className="checkout__title">Your shopping basket</h2>
                    {/* {basketItem} */}
                    {/* {basketItem} */}
                    {/* {basketItem} */}
                </div>
            </div>
            <div className="checkout__right">
                <h2>The subtotal</h2>
            </div>
        </div>
    );
}

export default Checkout;
