import Link from "next/link";
import Image from "next/image";
import { getHeaderData } from "@/lib/api/getHeaderData";
import { HeaderData } from "@/types/headerTypes";
import HeaderClient from "./HeaderClient"; // client-only logic (menu toggle, active link)

const Header = async () => {
  const headerData: HeaderData | null = await getHeaderData();

  if (!headerData) {
    return (
      <header className="relative header py-20 z-9">
        <div className="container-1680">
          <div className="header-start">
            <div className="header-above flex justify-between items-center gap-20">
              <div className="header-logo">
                <div className="w-[94px] h-[108px] bg-gray-200 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }

  // Pass data to client component
  return <HeaderClient headerData={headerData} />;
};

export default Header;
