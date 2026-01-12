import React from "react";
import { motion } from "framer-motion";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import BannerImg1 from "../../../assets/banner image/banner (1).png";
import BannerImg2 from "../../../assets/banner image/banner (2).png";
import BannerImg3 from "../../../assets/banner image/banner (3).png";
import BannerImg4 from "../../../assets/banner image/banner (4).png";
import BannerImg5 from "../../../assets/banner image/banner (5).png";
import BannerImg6 from "../../../assets/banner image/banner (6).png";
import { Link } from "react-router";
import "./Banner.css";
import { ArrowDown } from "lucide-react";

const Banner = () => {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false} interval={5000} showIndicators={false}>
        {[BannerImg1, BannerImg2, BannerImg3, BannerImg4, BannerImg5, BannerImg6].map((img, i) => (
          <div key={i} className="lg:h-[392px] md:h-[440px] h-[520px]">
            <img src={img} className="h-full w-full" />
            <div className="absolute inset-0 bg-linear-to-b from-black/70 to-black/70"></div>
          </div>
        ))}
      </Carousel>

      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none flex-col">
        <div className="px-6 text-center">
          <h1 className="lg:text-5xl text-3xl font-extrabold leading-tight text-primary dark:text-gray-200">
            Get the microloan you need — fast, secure & simple.
          </h1>

          <p className="my-4 lg:text-lg font-semibold max-w-2xl mx-auto text-white dark:text-gray-200">
            LoanLink helps micro-entrepreneurs, students and freelancers access
            short-term funding with transparent terms and quick approval.
          </p>
        </div>

        <div className="pointer-events-auto flex space-x-3 mt-4">
          <Link to="/all-loans" className="cta-first-button btn-sm md:btn-md">
            Explore Loans
          </Link>
          {/* <Link to="/loan-application-form" className="cta-second-button lg:btn-md md:btn-md btn-sm">
            Apply for Loan
          </Link> */}
        </div>
      </div>

      {/* Animated Arrow for Scroll */}
      <motion.div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.2, repeat: Infinity }}
      >
        <ArrowDown size={36} className="text-white animate-bounce" />
      </motion.div>
    </motion.div>
  );
};

export default Banner;