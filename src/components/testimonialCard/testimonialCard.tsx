import React from "react";
import Image, { StaticImageData } from "next/image";
const quote = "/assets/images/test-quote.png";
const leaf = "/assets/images/test-leaf.png";
import { Testimonial as TestimonialType } from "../../types/homeTypes";

interface TestimonialCardProps extends TestimonialType {}

const TestimonialCard = ({ text, customer }: TestimonialCardProps) => {
  return (
    <div className="test-card-main h-full">
      <div className="test-card-section relative h-full bg-dark-cream p-32">
        <div className="test-card-content relative z-1">
          <div className="test-card-quote mb-17">
            <Image src={quote} alt="quote" width={55} height={45} />
          </div>
          <div className="test-card-text">
            <p>{text}</p>
          </div>
          <div className="test-card-customer mt-28">
            <p className="font-semibold leading-118p75p text-black">
              {customer}
            </p>
          </div>
        </div>
        <div className="text-card-leaf absolute bottom-0 right-0">
          <Image src={leaf} alt="leaf" width={89} height={112} />
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
