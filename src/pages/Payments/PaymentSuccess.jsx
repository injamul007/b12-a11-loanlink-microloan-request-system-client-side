import axios from "axios";
import React, { useEffect, useRef } from "react";
import { Link, useSearchParams } from "react-router";
import { IoBagCheckOutline } from "react-icons/io5";
import MyContainer from "../../components/Shared/MyContainer/MyContainer";

const PaymentSuccess = () => {
  let [searchParams] = useSearchParams();
  const calledRef = useRef(false);

  const sessionId = searchParams.get("session_id");

  useEffect(() => {
    if (!sessionId || calledRef.current) return;

    calledRef.current = true;

    axios.post(`${import.meta.env.VITE_SERVER_API_URL_KEY}/payment-success`, {
      sessionId,
    });
  }, [sessionId]);

  return (
    <MyContainer>
      <div className="flex justify-center items-center my-12">
        <div className="card max-w-2xl bg-base-100 card-xl shadow-sm dark:shadow-sm">
          <div className="card-body text-center">
            <div className="flex justify-center">
              <IoBagCheckOutline size={60} color="lime" />
            </div>
            <h1 className="text-3xl font-bold">Payment Successful</h1>
            <p className="my-4">
              Thank You for Payment for this Loan Application Form. Your Loan Request is being precessed.
            </p>
            <div className="justify-center card-actions">
              <Link to={"/dashboard/my-loans"}>
                <button className="btn bg-[#4DA3FF] hover:bg-primary">Go To My Loans</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </MyContainer>
  );
};

export default PaymentSuccess;
