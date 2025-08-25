import React from 'react';
import logo from '/assets/images/header-logo.svg';

const Preloader = () => {
    return (
        <section className='preloaded-main fixed w-full h-full bg-body flex justify-center items-center z-9999'>
            <img src={logo} alt="Logo" width={94} height={108} className="logo-blink" />
        </section>
    )
}

export default Preloader;