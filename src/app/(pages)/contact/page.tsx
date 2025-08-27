import InsideBanner from "@/components/insideBanner/insideBanner";
import ContactForm from "@/components/ContactForm/ContactForm";
import Count from "@/components/Count/Count";
import { getContactData } from "@/lib/api/contact";

const bannerBG = "/assets/images/contact-banner-bg.webp";

export default async function Contact() {
  const { contactFormData, countData } = await getContactData();

  return (
    <>
      <InsideBanner bg={bannerBG} title="Contact Us" />
      {contactFormData && <ContactForm data={contactFormData} />}
      {countData && <Count data={countData} />}
    </>
  );
}

Contact.layout = {
  headerType: "inside",
};
