"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
// import img from "/assets/images/404-error.png";

const Error = () => {
  return (
    <section className="error-main py-60">
      <div className="container-1330">
        <div className="error-section">
          <div className="error-img">
            <Image
              src={"/assets/images/404-error.png"}
              alt="404"
              width={500}
              height={300}
              className="w-[300px] mx-auto"
            />
          </div>
          <div className="error-btn mt-40">
            <Link href="/" className="btn btn-gold-simple mx-auto">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Error;
