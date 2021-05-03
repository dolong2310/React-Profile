import React, { useEffect, useState } from "react";
import IntroOverlay from "../components/introOverlay";
import Banner from "../components/banner";
import Cases from "../components/cases";
import gsap from "gsap";

let tl = gsap.timeline();

const homeAnimation = (completeAnimation) => {
    tl.from(".line span", 0.4, {
        y: 100,
        ease: "power4.out",
        delay: 0.8,
        skewY: 7,
        stagger: {
            amount: 0.1,
        },
    })
        .to(".overlay-top", 1.2, {
            height: 0,
            ease: "expo.inOut",
            stagger: 0.2,
        })
        .to(".overlay-bottom", 1.2, {
            width: 0,
            ease: "expo.inOut",
            delay: -1,
            stagger: {
                amount: 0.2,
            },
        })
        .to(".intro-overlay", 0, {
            css: { display: "none" },
        })
        .from(".case-image img", 1.2, {
            scale: 1.4,
            ease: "expo.inOut",
            delay: -1.8,
            stagger: {
                amount: 0.2,
            },
            onComplete: completeAnimation,
        });
};

const Home = ({ dimensions }) => {
    const [animationComplete, setAnimationComplete] = useState(false);

    const completeAnimation = () => {
        setAnimationComplete(true);
    };

    useEffect(() => {
        homeAnimation(completeAnimation);
    }, []);

    useEffect(() => {
        let vh = dimensions.height * 0.01;
        document.documentElement.style.setProperty("--vh", `${vh}px`);
    }, [dimensions.width]);

    return (
        <>
            {animationComplete === false ? <IntroOverlay /> : ""}
            <Banner dimensions={dimensions} />
            <Cases />
        </>
    );
};

export default Home;
