export interface FooterData {
  planeicon: {
    src: string;
    alt: string;
  };
  footerText: string;
  inputBtnText: string;
  inputBtnIcon: string;
  formAgreeText: string;
  formAgreeLink: {
    text: string;
    link: string;
  };
  formConditionText: string;
  menu: {
    label: string;
    url: string;
  }[];
  social: {
    platform: string;
    url: string;
  }[];
}
