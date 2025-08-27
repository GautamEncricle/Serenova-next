export interface ContactFormInput {
  placeholder: string;
  icon: string;
}

export interface ContactFormData {
  subtitle: string;
  title: string;
  img: {
    src: string;
    alt: string;
  };
  inputs: ContactFormInput[];
  formAgreeText: string;
  formAgreeLink: {
    text: string;
    link: string;
  };
  formBtn: string;
}

export interface CountItem {
  number: string;
  label: string;
}

export interface CountData {
  counts: CountItem[];
}
