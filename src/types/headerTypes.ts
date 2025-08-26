export interface MenuItem {
  label: string;
  url: string;
}

export interface HeaderData {
  logo: string;
  logo1: string;
  bookNow: {
    text: string;
    link: string;
  };
  menu: MenuItem[];
}
