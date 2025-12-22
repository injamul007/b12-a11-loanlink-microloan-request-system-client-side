import React, { use } from "react";
import { motion } from "framer-motion";
import MyContainer from "../../Shared/MyContainer/MyContainer";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import CustomerFeedbackCard from "./CustomerFeedbackCard";
import customersTopImg from "../../../assets/customer_feedback.png";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";

const CustomerFeedback = ({ customersFeedbackData }) => {
  const customersFeedbacks = use(customersFeedbackData);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6 }}
    >
      <MyContainer>
        <div className="px-6">
          <div>
            <h2 className="text-3xl text-center font-bold my-6">
              What Our Customers Are Saying
            </h2>
            <img className="mx-auto w-50" src={customersTopImg} alt="" />
            <p className="text-center max-w-3xl mx-auto mt-4 mb-6 text-gray-500 font-semibold">
              Real experiences from borrowers who trusted our LoanLink system.
            </p>
          </div>

          <div className="lg:mb-22 mt-14">
            <Swiper
              effect="coverflow"
              grabCursor
              centeredSlides
              slidesPerView={3}
              loop
              modules={[Autoplay, EffectCoverflow]}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 200,
                modifier: 1,
                slideShadows: true,
              }}
            >
              {customersFeedbacks.map((feedback) => (
                <SwiperSlide key={feedback.id}>
                  <CustomerFeedbackCard feedback={feedback} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </MyContainer>
    </motion.div>
  );
};

export default CustomerFeedback;
