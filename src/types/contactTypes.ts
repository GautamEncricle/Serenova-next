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
  number: string; // Keep it as string since the data from db.json is in string format
  label: string;
}

export interface CountData {
  counts: CountItem[];
}
