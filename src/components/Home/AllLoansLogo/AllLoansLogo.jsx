import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import emergencyLoanImg from "../../../assets/all loans logo/emergency_loan_logo.png";
import studentLoanImg from "../../../assets/all loans logo/student_loan_logo.png";
import freelancerLoanImg from "../../../assets/all loans logo/freelancer_loan_logo.png";
import starterLoanImg from "../../../assets/all loans logo/starter_loan_logo.png";
import smallBusinessLoanImg from "../../../assets/all loans logo/small_business_loan_logo.png";
import MyContainer from "../../Shared/MyContainer/MyContainer";

const allLoanLogos = [
  emergencyLoanImg,
  studentLoanImg,
  freelancerLoanImg,
  starterLoanImg,
  smallBusinessLoanImg,
];

const AllLoansLogo = () => {
  return (
    <MyContainer>
      <div className="lg:pt-22 lg:pb-28 pt-14 pb-12 px-6">
        <Swiper
          slidesPerView={3}
          centeredSlides={true}
          spaceBetween={30}
          grabCursor={true}
          loop={true}
          modules={[Autoplay]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
        >
          {allLoanLogos.map((logo, idx) => (
            <SwiperSlide key={idx}>
              <img src={logo} className="w-50 inline-flex items-center" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </MyContainer>
  );
};

export default AllLoansLogo;
