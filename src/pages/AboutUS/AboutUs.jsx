import React from "react";
import logo from "../../assets/microloan_logo.png";
import { Link } from "react-router";
import MyContainer from "../../components/Shared/MyContainer/MyContainer";

const AboutUs = () => {
  return (
    <section className="py-18">
      <MyContainer>
        <div className="px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Visual */}
            <div className="lg:col-span-5 hover:scale-105 duration-200">
              <div className="relative max-w-md mx-auto">
                <div className="rounded-2xl bg-white dark:bg-[#2b3138] shadow-lg p-6 ring-1 ring-black/5 dark:ring-0">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center text-base-100 font-extrabold text-lg">
                      <img src={logo} alt="website_logo" />
                    </div>
                    <div>
                      <h4 className="font-bold text-text dark:text-gray-300">
                        MicroLoan
                      </h4>
                      <p className="text-sm text-text/70 dark:text-gray-300">
                        Microloan Request & Approval Tracker
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 grid lg:grid-cols-3 md:grid-cols-3 gap-3">
                    <div className="rounded-lg bg-primary/10 p-3 text-center">
                      <div className="text-lg font-bold text-primary">34k+</div>
                      <div className="text-xs text-text/70">Applications</div>
                    </div>
                    <div className="rounded-lg bg-primary/10 p-3 text-center">
                      <div className="text-lg font-bold text-primary">
                        24–72h
                      </div>
                      <div className="text-xs text-text/70">Approval</div>
                    </div>
                    <div className="rounded-lg bg-primary/10 p-3 text-center">
                      <div className="text-lg font-bold text-primary">4.6★</div>
                      <div className="text-xs text-text/70">Rating</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -z-10 -bottom-6 -right-6 w-40 h-40 rounded-full bg-primary/10" />
              </div>
            </div>

            {/* Right: Content */}
            <div className="lg:col-span-7">

              <h2 className="text-3xl md:text-4xl font-extrabold text-text dark:text-gray-300">
                Making microloans simple, transparent, and accessible
              </h2>

              <p className="mt-4 text-text/70 dark:text-gray-300 max-w-2xl">
                MicroLoan is a digital micro-loan platform designed to help
                individuals, students, freelancers, and small businesses access
                short-term funding with clarity and confidence. We focus on
                simple applications, transparent terms, and fast
                approvals—without hidden complexity.
              </p>

              <ul className="mt-6 space-y-3 text-sm text-text/80 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="mt-1 w-2 h-2 rounded-full bg-primary" />
                  Secure borrower verification and document handling
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 w-2 h-2 rounded-full bg-primary" />
                  Clear loan comparison and eligibility guidance
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 w-2 h-2 rounded-full bg-primary" />
                  Dashboard-based tracking for applications and approvals
                </li>
              </ul>

              <div className="mt-8 flex flex-wrap items-center lg:justify-start justify-center gap-4">
                <Link to={"/all-loans"} className="cta_btn">
                  Explore Loans
                </Link>
                <Link
                  to={"/contact"}
                  className="inline-flex items-center justify-center shadow-xl rounded-lg px-5 py-3 bg-white dark:bg-transparent border border-base-200 dark:border-[#0B5FFF]/30 text-text dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-[#2b3138] transition"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </MyContainer>
    </section>
  );
};

export default AboutUs;
