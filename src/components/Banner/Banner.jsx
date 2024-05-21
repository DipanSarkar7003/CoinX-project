import React from "react";
import BannerButtons from "./BannerButtons";

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
          <img className="bannerImage" src="https://shorturl.at/wfJCq" alt="Bitcoin Image" />
        </div>
        <BannerButtons />
      </div>
    </>
  );
};

export default Banner;
