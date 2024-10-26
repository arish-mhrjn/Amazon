import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img
                    src="https://store-images.s-microsoft.com/image/apps.24594.13510798887500496.393115ce-aadd-41b0-a06b-6de8b907aa10.b4898b91-921e-43ef-aedc-8a0e423c95d5?mode=scale&q=90&h=1080&w=1920"
                    alt=""
                    className="home__image"
                />
                <div className="home__row">
                    <Product
                        price={19.99}
                        title={"The lean Startup"}
                        rating={5}
                    />
                    <Product
                        price={19.99}
                        title={"The lean Startup"}
                        rating={5}
                    />
                    <Product
                        price={19.99}
                        title={"The lean Startup"}
                        rating={5}
                    />
                    <Product
                        price={19.99}
                        title={"The lean Startup"}
                        rating={5}
                    />
                </div>
                <div className="home__row">
                    <Product
                        price={19.99}
                        title={"The lean Startup"}
                        rating={5}
                    />
                    <Product
                        price={19.99}
                        title={"The lean Startup"}
                        rating={5}
                    />

                    <Product
                        price={19.99}
                        title={"The lean Startup"}
                        rating={5}
                    />
                </div>
                <div className="home__row">
                    <Product
                        price={19.99}
                        title={"The lean Startup"}
                        rating={5}
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;
