import React from "react";
// import Swiper core and required modules
import SwiperCore, { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.scss";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const caseStudies = [
    {
        id: 1,
        subtitle:
            "ReactJS, Redux Toolkit, Axios, Strapi, MongoDB, React Hook Form (Yup Validation), React Router Dom, Material UI...",
        title: "TodoList App",
        img: "todos-img",
        url: "https://todo-app-fawn-three.vercel.app/",
    },
    {
        id: 2,
        title: "Ecommerce Shop",
        subtitle:
            "ReactJS, Redux Toolkit, Axios, Strapi, React Hook Form (Yup Validation), React Router Dom, Material UI...",
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
                        {caseStudies.map((caseItem, index) => (
                            <SwiperSlide key={index}>
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
