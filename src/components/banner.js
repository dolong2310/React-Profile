import React from "react";

const Banner = () => {
    return (
        <section className="main">
            <div className="container">
                <div className="row">
                    <h2>
                        <div className="line">
                            <span>I'm Long</span>
                        </div>
                        <div className="line">
                            <span>try to be a good developer.</span>
                        </div>
                    </h2>
                    {/* <div className="btn-row">
                        <Link to="/about">
                            More about me <RightArrow />
                        </Link>
                    </div> */}
                </div>
            </div>
        </section>
    );
};

export default Banner;
