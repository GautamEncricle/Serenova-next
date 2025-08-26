import React, { useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
const birds = "/assets/images/best-bird.png";
const tree = "/assets/images/best-tree.png";
import { Best as BestType } from "../../types/homeTypes";

interface BestProps {
  data: BestType;
}

const Best = ({ data }: BestProps) => {
  const { img, subtitle, title, text, list, bestBtn } = data;

  const VideoWithOverlay = ({ src, alt }: { src: string; alt: string }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [showOverlay, setShowOverlay] = useState(true);

    const handleMouseEnter = () => {
      if (videoRef.current) {
        videoRef.current.play();
      }
    };

    const handlePlay = () => {
      setShowOverlay(false);
    };

    const handleEnded = () => {
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
        videoRef.current.load();
      }
      setShowOverlay(true);
    };

    return (
      <div className="video-wrapper" onMouseEnter={handleMouseEnter}>
        {showOverlay && (
          <div className="video-overlay">
            <div className="pause-icon">
              <img
                src="/assets/images/best-pause.png"
                alt="pause"
                width={50}
                height={51}
              />
            </div>
          </div>
        )}
        <video
          ref={videoRef}
          src={src}
          muted
          playsInline
          poster="/assets/images/video-placeholder.webp"
          onPlay={handlePlay}
          onEnded={handleEnded}
        />
      </div>
    );
  };

  return (
    <section className="best-main relative bg-dark-cream py-60 min-1400:py-[130px]">
      <div className="best-bird max-990:hidden absolute top-30 min-1400:top-[83px] right-[49px] z-0">
        <Image src={birds} alt="birds" width={183} height={77} />
      </div>
      <div className="best-tree absolute bottom-0 min-990:bottom-[-20px] min-1600:bottom-[-70px] right-0 z-0">
        <img
          src={tree}
          alt="tree"
          width={393}
          height={507}
          className="w-[120px] min-576:w-[200px] min-1400:w-[300px] min-1600:w-auto"
        />
      </div>
      <div className="container-1610">
        <div className="best-section relative z-1">
          <div className="best-start flex flex-col min-990:flex-row items-center gap-y-30">
            <div className="best-left min-990:flex-[0_0_46%] min-1200:flex-[0_0_54%] flex flex-wrap gap-20 min-1200:gap-30">
              {img.map((item, index) => (
                <div
                  key={index}
                  className="best-img flex-[0_0_calc(50%_-_15px)]">
                  {item.type === "video" ? (
                    <VideoWithOverlay src={item.src as string} alt={item.alt} />
                  ) : (
                    <Image
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-auto aspect-[0.68/1]"
                      width={400}
                      height={588}
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="best-right relative min-990:flex-[0_0_54%] min-1200:flex-[0_0_46%] pl-0 min-990:pl-20 min-1200:pl-30 min-1600:pl-[121px]">
              <div className="best-bird min-990:hidden absolute top-10 right-10 min-768:right-[49px] z-0">
                <Image
                  src={birds}
                  alt="birds"
                  width={183}
                  height={77}
                  className="w-[100px] min-576:w-[150px]"
                />
              </div>
              <div className="sub-title sub-title-no-translate mb-16">
                <span className="after:!left-[40px]">{subtitle}</span>
              </div>
              <div className="best-title">
                <h2 className="h4">{title}</h2>
              </div>
              <div className="best-text mt-15">
                <p>{text}</p>
              </div>
              <div className="best-list correct-ul mt-16 min-1600:mt-32">
                <ul>
                  {list.map((item, index) => (
                    <li key={index} className="text-black">
                      {item.li}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="best-btn mt-24 min-1600:mt-42">
                <a href={bestBtn.link} className="btn btn-gold-simple">
                  {bestBtn.btnText}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Best;
