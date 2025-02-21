import React, { useEffect, useRef, useState } from "react"; 
import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion";
import './styles/Top.css';

const SECTION_HEIGHT = 1500;

const Top = () => {
  useEffect(() => {
    // Scroll to the top when the component is mounted
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="top-container" id="top">
      <CustomCursor />
      <Hero />
      <TopDetails />
    </div>
  );
};

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const [hovering] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`custom-cursor ${hovering ? "hovering" : ""}`}
    >
      <span className={`cursor-text ${hovering ? "visible" : ""}`}>
        Scroll Down
      </span>
    </div>
  );
};

const Hero = () => {
  return (
    <div
      className="hero-section"
      onMouseEnter={() => document.querySelector(".custom-cursor").classList.add("hovering")}
      onMouseLeave={() => document.querySelector(".custom-cursor").classList.remove("hovering")}
    >
      <CenterImage />
      <ParallaxImages />
      <div className="gradient-overlay" />
    </div>
  );
};

const CenterImage = () => {
  const { scrollY } = useScroll();

  const clip1 = useTransform(scrollY, [0, 1500], [25, 0]);
  const clip2 = useTransform(scrollY, [0, 1500], [75, 100]);

  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

  const backgroundSize = useTransform(
    scrollY,
    [0, SECTION_HEIGHT + 500],
    ["170%", "100%"]
  );
  const opacity = useTransform(
    scrollY,
    [SECTION_HEIGHT, SECTION_HEIGHT + 500],
    [1, 0]
  );

  return (
    <>
      {/* Desktop Center Image */}
      <motion.div
        className="center-image center-image-desktop"
        style={{
          clipPath,
          backgroundSize,
          opacity,
          backgroundImage:
            "url(https://res.cloudinary.com/dwcxwpn7q/image/upload/v1737913718/cattle%20site/top2_jq9sz1.png)",
        }}
      />
      {/* Mobile Center Image */}
      <motion.div
        className="center-image center-image-mobile"
        style={{
          clipPath,
          backgroundSize,
          opacity,
          backgroundImage:
            "url(https://res.cloudinary.com/dwcxwpn7q/image/upload/v1737917080/cattle%20site/phone2_c21kgg.png)", // Replace with mobile-specific image
        }}
      />
    </>
  );
};

const ParallaxImages = () => {
  return (
    <div className="parallax-images">
      <ParallaxImg
        src="https://res.cloudinary.com/dwcxwpn7q/image/upload/v1737919875/cattle%20site/823045008417489391_dtr6qh.png"
        alt="Space launch"
        start={0}
        end={200}
        className="parallax-img img-left"
      />
      <ParallaxImg
        src="https://res.cloudinary.com/dwcxwpn7q/image/upload/v1737920686/cattle%20site/823123765232872001_loa6mr.png"
        alt="Spacecraft"
        start={200}
        end={-250}
        className="parallax-img img-center"
      />
      <ParallaxImg
        src="https://res.cloudinary.com/dwcxwpn7q/image/upload/v1737920243/cattle%20site/823122485332586303_ea9jzl.png"
        alt="Satellite"
        start={-200}
        end={200}
        className="parallax-img img-right"
      />
    </div>
  );
};

const ParallaxImg = ({ className, alt, src, start, end }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`],
  });

  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);

  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  return (
    <motion.img
      src={src}
      alt={alt}
      className={className}
      ref={ref}
      style={{ transform, opacity }}
    />
  );
};

const TopDetails = () => {
  return (
    <div className="top-details">
      <video
        className="top-video"
        autoPlay
        loop
        muted
        playsInline
        src="https://res.cloudinary.com/dwcxwpn7q/video/upload/v1740169824/cattle%20site/My_Video_f7vjsx.mp4"
      />
      <div className="top-description">
        <h2>
        Welcome to <span className="highlight">Cattle Site</span>
        </h2>
        <p>
        Our project focuses on developing an integrated veterinary application to enhance cow health management. It aims to improve disease detection, optimize cow care practices, predict milk production, and streamline veterinary services.
        </p>
      </div>
    </div>
  );
};


export default Top;
