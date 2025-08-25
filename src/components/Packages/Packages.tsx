import React from 'react';
import PackageCard from '../packageCard';
import leaf from '/assets/images/package-leaf.png';

const Packages = ({ data }) => {

    const { subtitle, title, text, packs } = data;

    return (
        <section className="packages-main relative py-60 min-1400:pt-76 min-1400:pb-[147px]">
            <div class="package-leaf absolute top-0 left-0">
                <img src={leaf} alt="leaf" width={190} height={257} className='w-[80px] min-990:w-[120px] min-1400:w-auto' />
            </div>
            <div class="container-1395">
                <div class="packages-section relative z-1">
                    <div class="packages-start">
                        <div class="sub-title sub-title-no-translate mb-16">
                            <span className='mx-auto after:!left-[1px]'>{subtitle}</span>
                        </div>
                        <div class="title text-center">
                            <h2 className='h4'>{title}</h2>
                        </div>
                        <div class="text text-center mt-22 max-w-[724px] mx-auto">
                            <p>{text}</p>
                        </div>
                        <div class="packages-list mt-40 min-1600:mt-90 grid grid-cols-1 min-768:grid-cols-2 min-1200:grid-cols-3 gap-[33px]">
                            {packs.map(pack => (
                                <PackageCard {...pack} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Packages;