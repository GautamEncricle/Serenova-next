import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import headerData from '../../data/header.json';

const Header = ({ type }) => {

    const isInside = type === "inside";

    const headerClass = isInside
        ? "absolute w-full"
        : "relative";

    const {
        logo,
        logo1,
        bookNow,
        menu
    } = headerData;

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Lock body scroll when menu is open
    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
    }, [isMenuOpen]);

    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    };

    return (
        <header className={`${headerClass} header py-20 z-9`}>
            <div className="container-1680">
                <div className="header-start">
                    <div className="header-above flex justify-between items-center gap-20">
                        <div className="header-logo">
                            <a href="/">
                                <img src={isInside ? logo1 : logo}  alt="logo" width={94} height={108} />
                            </a>
                        </div>
                        <div className={`
                            header-menu min-1200:block
                            ${isMenuOpen ? 'block fixed top-0 left-0 w-full h-[100dvh] bg-body z-9 overflow-auto' : 'hidden'}
                            min-1200:static min-1200:bg-transparent
                        `}>
                            <ul className='flex min-1200:flex-wrap flex-col min-1200:flex-row justify-center items-center gap-y-12 gap-x-16 min-1400:gap-x-24 min-1600:gap-x-[47px] max-1200:h-full max-1200:p-20'>
                                {menu.map((item, index) => (
                                    <li key={index} className='1200:max-1600:text-15 leading-150p font-light'>
                                        <NavLink
                                            to={item.url}
                                            className={({ isActive }) =>
                                                `nav-link text-black hover:text-secondary-800
                                                ${isInside ? "min-1200:text-white min-1200:hover:text-black" : "min-1200:text-black min-1200:hover:text-secondary-800"}
                                                ${isActive ? "active" : ""}`
                                            }
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                                {item.label}
                                        </NavLink>
                                    </li>
                                ))}
                                <li className="book-now-btn min-1200:hidden">
                                    <a href={bookNow.link} className="btn btn-gold-simple">{bookNow.text}</a>
                                </li>
                            </ul>
                        </div>
                        <div className="book-now-btn max-1200:hidden">
                            <a href={bookNow.link} className={`btn ${isInside ? "btn-simple-white" : "btn-gold-simple"}`}>{bookNow.text}</a>
                        </div>
                        <div className="header-hamburger min-1200:hidden max-1200:relative max-1200:z-99 flex flex-col gap-10 cursor-pointer" onClick={toggleMenu}>
                            <span
                                className={`inline-block w-[25px] h-[2px] ml-auto transition-all duration-300
                                    ${isMenuOpen ? 'bg-black w-[45px] rotate-45 translate-y-[17px]' : `${isInside ? 'bg-white' : 'bg-black'}`}
                                `}
                            ></span>

                            <span
                                className={`inline-block w-[38px] h-[2px] ml-auto transition-all duration-300
                                    ${isMenuOpen ? 'bg-black opacity-0' : `${isInside ? 'bg-white' : 'bg-black'}`}
                                `}
                            ></span>

                            <span
                                className={`inline-block w-[45px] h-[2px] ml-auto transition-all duration-300
                                    ${isMenuOpen ? 'bg-black -rotate-45 -translate-y-[6px]' : `${isInside ? 'bg-white' : 'bg-black'}`}
                                `}
                            ></span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;