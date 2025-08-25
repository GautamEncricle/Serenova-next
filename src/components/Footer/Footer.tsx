import React from 'react';
import footerData from '../../data/footer.json';
import leftLeaf from '/assets/images/footer-leaf-left.png';
import rightLeaf from '/assets/images/footer-leaf-right.png';

const Footer = () => {

    const {
        planeicon,
        footerText,
        inputBtnText,
        inputBtnIcon,
        formAgreeText,
        formAgreeLink,
        formConditionText,
        menu,
        social
    } = footerData;

    return (
        <footer className='footer relative bg-cream'>
            <div className="footer-leaf-left absolute top-[45px] left-0 z-0 max-640:hidden">
                <img src={leftLeaf} alt="leaf" width={290} height={370} className='w-[90px] min-990:w-[180px] min-1200:w-auto' />
            </div>
            <div className="footer-leaf-right absolute top-[5px] right-0 z-0 max-640:hidden">
                <img src={rightLeaf} alt="leaf" width={375} height={474} className='w-[100px] min-990:w-[200px] min-1200:w-auto' />
            </div>
            <div className="footer-above py-40 min-1200:py-72">
                <div className='container-1313'>
                    <div className="footer-above-inside">
                        <div className="footer-above-details max-w-[320px] min-640:max-w-[363px] mx-auto mb-20 min-1200:mb-32">
                            <div className="footer-above-icon mb-16 min-1200:mb-22">
                                <img src={planeicon.src} alt={planeicon.alt || 'icon'} width={42} height={42} className='mx-auto' />
                            </div>
                            <div className="footer-above-text text-center">
                                <p className='poppins-300-30'>{footerText}</p>
                            </div>
                        </div>
                        <div className="footer-above-form">
                            <div className="footer-form-input-box max-w-[631px] mx-auto flex justify-center">
                                <div className="footer-form-input flex-[0_0_calc(100%_-_143px)]">
                                    <input type="email" name="email" id="email" placeholder='Enter Your Email Address' className="px-14 min-640:px-[27px] py-10 w-full h-[55px] bg-white font-poppins font-regular text-[15px] leading-150p text-black tracking-[0.1px] placeholder:text-[15px] placeholder:leading-150p placeholder:text-grey-400 placeholder:tracking-[0.1px]" />
                                </div>
                                <button className="footer-form-subscribe-btn group flex-[0_0_120px] min-640:flex-[0_0_143px] flex items-center justify-center gap-[11px] p-6 cursor-pointer bg-white relative after:content-[''] after:absolute after:w-[1px] after:h-[29px] after:top-50p after:left-0 after:translate-y-50mp after:bg-secondary-800">
                                    <img src={inputBtnIcon} alt="icon" width={16} height={13} className='flex-[0_0_16px]' />
                                    <p className='text-left font-poppins font-normal text-[13px] leading-120p text-primary-500 tracking-[0.5px] transition-all duration-300 ease-in-out group-hover:text-black'>{inputBtnText}</p>
                                </button>
                            </div>
                            <div className="footer-form-agreement flex items-center justify-center mt-20 min-1200:mt-32">
                                <input type="checkbox" name="agree" id="agree" className='invisible w-0 h-0' />
                                <label htmlFor="agree" className='text-14 leading-[157.143%] text-secondary-900'>{formAgreeText} <a href={formAgreeLink.link} className='leading-100p underline hover:text-black'>{formAgreeLink.text}</a></label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-below">
                <div className='container-1313'>
                    <div className="footer-below-inside py-30 min-1200:py-40 border-t-[1px] border-solid border-[rgba(173,_157,_114,_0.5)]">
                        <div className="footer-below-divs flex flex-wrap flex-col min-1200:flex-row min-1200:justify-between items-center gap-20">
                            <div className="footer-copyright">
                                <p className='text-black leading-150p'>{formConditionText}</p>
                            </div>
                            <div className="footer-menu">
                                <ul className='flex flex-wrap flex-col min-640:flex-row items-center justify-center gap-x-12 gap-y-6'>
                                    {menu.map((item, index) => (
                                        <li key={index} className='leading-150p'>
                                            <a href={item.url} className='leading-150p text-black hover:text-secondary-800'>{item.label}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="social-icons">
                                <ul>
                                    {social.map((item, index) => (
                                        <li key={index}>
                                            <a href={item.url}>
                                                <img src={item.platform} alt="icon" width='auto' height='auto' />
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;