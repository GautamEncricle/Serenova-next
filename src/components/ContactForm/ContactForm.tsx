import React from "react";
import { ContactFormData } from "@/types/contactTypes";

const leaf = "/assets/images/contact-form-leaf.png";

interface ContactFormProps {
  data: ContactFormData;
}

const ContactForm: React.FC<ContactFormProps> = ({ data }) => {
  const { subtitle, img, inputs, formAgreeText, formAgreeLink, formBtn } = data;

  return (
    <section className="contact-form-main relative py-60 min-1400:py-[91px]">
      <div className="conatact-leaf absolute bottom-0 min-1800:bottom-[239px] right-0 max-990:hidden">
        <img
          src={leaf}
          alt="leaf"
          width={222}
          height={282}
          className="w-[100px] min-1800:w-auto"
        />
      </div>
      <div className="container-1330">
        <div className="contact-form-section relative z-1 flex flex-col min-990:flex-row gap-y-30">
          <div className="contact-form-left min-990:flex-[0_0_55%]">
            <div className="sub-title sub-title-no-translate mb-18">
              <span className="after:!left-[16px]">{subtitle}</span>
            </div>
            <div className="title">
              <h2
                className="h4"
                dangerouslySetInnerHTML={{ __html: data.title }}></h2>
            </div>
            <div className="contact-form-img mt-30 min-1600:mt-46">
              <img
                src={img.src}
                alt={img.alt}
                width="auto"
                height="auto"
                className="w-full object-cover"
              />
            </div>
          </div>
          <div className="contact-form-right min-990:flex-[0_0_calc(45%_+_30px)] min-1600:flex-[0_0_calc(45%_+_66px)] min-990:pt-100 min-990:pb-70 min-990:-ml-30 min-1600:-ml-66">
            <form className="p-30 min-1400:p-66 bg-medium-cream">
              {inputs.map((input, index) => (
                <div
                  key={index}
                  className="contact-form-input relative mb-30 min-1400:mb-54 pl-[43px] pb-15 border-b-[1px] border-solid border-grey-400">
                  <div
                    dangerouslySetInnerHTML={{ __html: input.icon }}
                    className="contact-form-input-icon absolute left-0 top-0"></div>
                  <input
                    type="text"
                    placeholder={input.placeholder}
                    className="w-full font-teachers font-normal text-16 min-768:text-18 min-1400:text-20 leading-120p text-black tracking-[1px] placeholder:font-teachers placeholder:font-normal placeholder:text-16 placeholder:min-768:text-18 placeholder:min-1400:text-20 placeholder:leading-120p placeholder:text-grey-400 placeholder:tracking-[1px] placeholder:capitalize py-[3.5px]"
                  />
                </div>
              ))}
              <div className="footer-form-agreement flex items-center">
                <input
                  type="checkbox"
                  name="agree"
                  id="agree"
                  className="invisible w-0 h-0"
                />
                <label
                  htmlFor="agree"
                  className="text-14 leading-[157.143%] text-secondary-900">
                  {formAgreeText}{" "}
                  <a
                    href={formAgreeLink.link}
                    className="leading-100p underline hover:text-black">
                    {formAgreeLink.text}
                  </a>
                </label>
              </div>
              <div className="contact-form-btn mt-32">
                <button className="btn btn-gold-simple cursor-pointer">
                  {formBtn}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
