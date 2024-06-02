import React from "react";
import BannerButtons from "./BannerButtons";
const bannerImageUrl = 'https://i.postimg.cc/KYmPy0Vf/bitcoin.png'

const Banner = () => {
  return (
    <>
      <div className="Hero-Banner">
        <div className="BannerTop">
          <div className="bannerTextPart">
            <h1 className="bannerMainText">
              <span> Coin X </span>
              <br />
              Next Generation <br /> Crypto Analysing Tool
            </h1>
            <p>
              Get ready for a crypto analyzer that can <br /> finally catch up
              with you.
            </p>
          </div>
          {/* <img className="bannerImage" src="https://postimg.cc/ZWDB8xJv" alt="Bitcoin Image" /> */}
        {/* <img className="bannerImage" src={bannerImageUrl} border='0' alt='bitcoin'/> */}
       <img className="bannerImage" src='https://i.postimg.cc/LXZMfhGb/Bitcoin-3d.png' border='0' alt='Bitcoin-3d'/>
        </div>
        <BannerButtons />
      </div>
    </>
  );
};

export default Banner;
