import React, { useState } from "react";
import { Link } from "react-router";
import footerLogo from "../../../assets/microloan_logo.png";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Swal from "sweetalert2";
import MyContainer from "../MyContainer/MyContainer";

export default function Footer() {
  const [subscribe, setSubscribe] = useState(false);

  const dummyHandleFrom = (e) => {
    e.preventDefault();
    if (e.target.email.value.includes("@gmail.com")) {
      setSubscribe(!subscribe);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Subscribe Successful",
        showConfirmButton: false,
        timer: 1500,
        customClass: {
          popup: "small-swal-popup",
        },
      });
      e.target.reset();
      setTimeout(() => {
        setSubscribe(false);
      }, 1000);
    }
  };

  return (
    <footer
      className="bg-[#F4F8FF] dark:bg-[#303233] text-text dark:text-white
    border-t border-[#0B5FFF]/10 dark:border-[#0B5FFF]/20"
    >
      <MyContainer>
        <div className="lg:px-2 px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Brand */}
            <div className="md:col-span-4">
              <Link to="/" className="flex items-start gap-3">
                <div>
                  <img src={footerLogo} alt="footerLogo" className="w-30" />
                </div>
                <div>
                  <h3 className="text-2xl text-primary font-bold">
                    Micro
                    <span className="text-secondary dark:text-[#FFB703]">
                      Loan
                    </span>{" "}
                  </h3>
                  <p className="mt-1 text-sm text-text/80 dark:text-base-400/80">
                    Microloan Request &amp; Approval Tracker System — Simple,
                    secure, and fast loan application management.
                  </p>
                </div>
              </Link>

              <div className="mt-6 flex flex-col items-center gap-3">
                <p className="text-sm">Contact With Us</p>
                <div className="flex items-center gap-3 mt-2">
                  <a
                    aria-label="Facebook"
                    href="#"
                    className="p-2 rounded-lg bg-white/6 hover:bg-secondary transition dark:hover:bg-[#FFB703]"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    aria-label="Twitter"
                    href="#"
                    className="p-2 rounded-lg bg-white/6 hover:bg-secondary dark:hover:bg-[#FFB703] transition"
                  >
                    <FaXTwitter />
                  </a>
                  <a
                    aria-label="LinkedIn"
                    href="#"
                    className="p-2 rounded-lg bg-white/6 hover:bg-secondary transition dark:hover:bg-[#FFB703]"
                  >
                    <FaLinkedinIn />
                  </a>
                  <a
                    aria-label="Instagram"
                    href="#"
                    className="p-2 rounded-lg bg-white/6 hover:bg-secondary transition dark:hover:bg-[#FFB703]"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    aria-label="YouTube"
                    href="#"
                    className="p-2 rounded-lg bg-white/6 hover:bg-secondary transition dark:hover:bg-[#FFB703]"
                  >
                    <FaYoutube />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-2">
              <h4 className="font-semibold">Quick Links</h4>
              <ul className="mt-3 space-y-2 text-sm text-text/80 dark:text-base-400/80">
                <li>
                  <Link
                    to="/"
                    className="hover:text-primary dark:hover:text-[#FFB703]"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/all-loans"
                    className="hover:text-primary dark:hover:text-[#FFB703]"
                  >
                    All Loans
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about-us"
                    className="hover:text-primary dark:hover:text-[#FFB703]"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="hover:text-primary dark:hover:text-[#FFB703]"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div className="md:col-span-2">
              <h4 className="font-semibold">Resources</h4>
              <ul className="mt-3 space-y-2 text-sm text-text/80 dark:text-base-400/80">
                <li>
                  <Link
                    to="/dashboard"
                    className="hover:text-primary dark:hover:text-[#FFB703]"
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/my-loans"
                    className="hover:text-primary dark:hover:text-[#FFB703]"
                  >
                    My Loans
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/loan-applications"
                    className="hover:text-primary dark:hover:text-[#FFB703]"
                  >
                    Loan Applications
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms"
                    className="hover:text-primary dark:hover:text-[#FFB703]"
                  >
                    Terms &amp; Privacy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact & Newsletter */}
            <div className="md:col-span-4">
              <h4 className="font-semibold">Contact</h4>
              <div className="mt-3 text-sm text-text/80 dark:text-base-400/80 space-y-2">
                <div>
                  Email:{" "}
                  <a
                    href="mailto:support@microloan.example"
                    className="text-primary dark:text-primary hover:underline"
                  >
                    support@microloan.example
                  </a>
                </div>
                <div>
                  Phone:{" "}
                  <a
                    href="tel:+880123456789"
                    className="text-primary dark:text-primary hover:underline"
                  >
                    +880 1234 56789
                  </a>
                </div>
                <div>Address: 24/B Finance Street, Dhaka, Bangladesh</div>
              </div>

              <div className="mt-4">
                <h5 className="font-medium text-sm">News &amp; Updates</h5>
                <p className="text-xs text-text/70 dark:text-base-400/70 mt-1">
                  Subscribe to get loan updates, offers and policy changes.
                </p>

                <form className="mt-3 flex gap-2" onSubmit={dummyHandleFrom}>
                  <input
                    aria-label="Email for newsletter"
                    type="email"
                    name="email"
                    required
                    placeholder="Your email"
                    className="input input-sm input-bordered w-full bg-white dark:bg-[#303233] dark:bg-opacity-10 text-text dark:text-base-400"
                  />
                  <button
                    type="submit"
                    className="btn my-btn btn-primary btn-sm text-base-100 cursor-pointer"
                  >
                    {subscribe ? "Subscribed" : "Subscribe"}
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-[#0B5FFF]/10 dark:border-[#0B5FFF]/20 pt-6 text-sm text-text/70 dark:text-base-400/70 flex flex-col md:flex-row md:items-center md:justify-center gap-3">
            <div>
              © {new Date().getFullYear()} MicroLoan. All rights reserved.
            </div>
          </div>
        </div>
      </MyContainer>
    </footer>
  );
}
