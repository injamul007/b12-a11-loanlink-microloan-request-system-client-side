import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import BannerImg1 from "../../../assets/banner image/banner (1).png";
import BannerImg2 from "../../../assets/banner image/banner (2).png";
import BannerImg3 from "../../../assets/banner image/banner (3).png";
import BannerImg4 from "../../../assets/banner image/banner (4).png";
import BannerImg5 from "../../../assets/banner image/banner (5).png";
import BannerImg6 from "../../../assets/banner image/banner (6).png";
import BannerImg7 from "../../../assets/banner image/banner (7).png";
import { Link } from "react-router";
import "./Banner.css"

const Banner = () => {
  return (
    <div className="relative">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
      >
        <div className="h-[560px]">
          <img src={BannerImg1} className="h-full w-full " />

          {/* dark overlay */}
          <div className="absolute inset-0 bg-linear-to-b from-black/70 to-black/70"></div>
        </div>
        <div className="h-[560px]">
          <img src={BannerImg2} className="h-full w-full " />

          <div className="absolute inset-0 bg-linear-to-b from-black/70 to-black/70"></div>
        </div>
        <div className="h-[560px]">
          <img src={BannerImg3} className="h-full w-full " />

          <div className="absolute inset-0 bg-linear-to-b from-black/70 to-black/70"></div>
        </div>
        <div className="h-[560px]">
          <img src={BannerImg4} className="h-full w-full " />

          <div className="absolute inset-0 bg-linear-to-b from-black/70 to-black/70"></div>
        </div>
        <div className="h-[560px]">
          <img src={BannerImg5} className="h-full w-full " />

          <div className="absolute inset-0 bg-linear-to-b from-black/70 to-black/70"></div>
        </div>
        <div className="h-[560px]">
          <img src={BannerImg6} className="h-full w-full " />

          <div className="absolute inset-0 bg-linear-to-b from-black/70 to-black/70"></div>
        </div>
        <div className="h-[560px]">
          <img src={BannerImg7} className="h-full w-full " />

          <div className="absolute inset-0 bg-linear-to-b from-black/70 to-black/70"></div>
        </div>
      </Carousel>

      {/* buttons positions centered */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none flex-col">
        <div className="px-6 text-center">
          <h1 className="text-4xl font-extrabold leading-tight text-primary dark:text-gray-200 fade-in-up">
            Get the microloan you need — fast, secure & simple.
          </h1>

          <p className="my-4 text-md font-semibold max-w-2xl mx-auto text-white dark:text-gray-200 fade-in-up-delay">
            Microloan helps micro-entrepreneurs, students and freelancers access
            short-term funding with transparent terms and quick approval.
            Compare plans, apply in minutes, and track disbursement from your
            dashboard.
          </p>
        </div>

        <div className="pointer-events-auto flex space-x-3 mt-4 fade-in-up-delay">
          <Link
            to={"/loan-application-form"}
            className="cta-first-button btn-sm md:btn-md lg:btn-md"
            aria-label="Start application"
          >
            Apply for Loan
          </Link>
          <Link
            to={"/all-loans"}
            className="cta-second-button btn-sm md:btn-md lg:btn-md"
            aria-label="Explore loans"
          >
            Explore Loans
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
