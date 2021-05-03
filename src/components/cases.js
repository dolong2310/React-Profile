import React from "react";
import { ReactComponent as CasesNext } from "../assets/arrow-right.svg";
import { ReactComponent as CasesPrev } from "../assets/arrow-left.svg";
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import { Link } from "react-router-dom";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const caseStudies = [
    {
        id: 1,
        subtitle:
            "ReactJS, Redux Toolkit, Axios, Strapi, MongoDB, React Hook Form (Yup Validation), React Router Dom...",
        title: "TodoList App",
        img: "todos-img",
        url: "https://todo-app-fawn-three.vercel.app/",
    },
    {
        id: 2,
        title: "Ecommerce Shop",
        subtitle:
            "ReactJS, Redux Toolkit, Axios, Strapi, React Hook Form (Yup Validation), React Router Dom...",
        img: "ecomerce-img",
        url: "https://shop-redux-app.vercel.app/",
    },
    {
        id: 3,
        title: "Nhamilk Shop",
        subtitle:
            "ReactJS, Redux Toolkit, Axios, Strapi, React Hook Form (Yup Validation), React Router Dom...",
        img: "nhamilk-img",
        url: "https://nhamilk-app.vercel.app/",
    },
    {
        id: 4,
        title: "Nhamilk Shop",
        subtitle: "Html, Css, Js, Scss",
        img: "nhamilk-img",
        url: "http://nhamilk.surge.sh/",
    },
];

const Cases = () => {
    return (
        <>
            <section className="cases">
                <div className="container-fluid">
                    {/* <div className="cases-navigation">
                        <div className="cases-arrow prev disabled">
                            <CasesPrev />
                        </div>
                        <div className="cases-arrow next">
                            <CasesNext />
                        </div>
                    </div> */}
                    <Swiper
                        slidesPerView={3}
                        navigation
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log("slide change")}
                        className="row"
                    >
                        {caseStudies.map((caseItem) => (
                            <SwiperSlide>
                                <a href={caseItem.url} className="case-link">
                                    <div className="case" key={caseItem.id}>
                                        <div className="case-details">
                                            <h2>{caseItem.title}</h2>
                                            <span>{caseItem.subtitle}</span>
                                        </div>
                                        <div className="case-image">
                                            <img
                                                src={require(`../assets/${caseItem.img}.png`)}
                                                alt={caseItem.title}
                                            />
                                        </div>
                                    </div>
                                </a>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
        </>
    );
};

export default Cases;
